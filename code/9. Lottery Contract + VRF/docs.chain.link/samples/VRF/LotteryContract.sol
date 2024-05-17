// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./VRFv2Consumer.sol";

contract Lottery {
    address payable public manager;
    
    address payable[] public players;

    // Instance of the VRF consumer
    VRFv2Consumer internal consumerContract;
    uint roundId;
    mapping(uint => address) public roundToWinner;

    enum LOTTERY_STATE {
        OPEN, // People can join
        CLOSE, // Lottery is closed
        CALCULATING_WINNER // Waiting for VRF response
    }
    LOTTERY_STATE public lottery_state;

    constructor() {
        manager = payable(msg.sender);
        lottery_state = LOTTERY_STATE.OPEN;
        consumerContract = VRFv2Consumer(0xcD71a8c2291aa5deabb1F3cFC651c137887f2A54);
    }

    modifier managerOnly {
        require(msg.sender == manager, "Can only be called by manager");
        _;
    }

    receive() payable external {
        require(payable(msg.sender) != manager, "Manager cannot join the lottery");
        require(msg.value == 0.011 ether, "Must be 0.011ETH to enter the lottery");

        // Add player to players array
        players.push(payable(msg.sender));
    }

    function getPlayers() public managerOnly view returns(address payable[] memory) {
        return players;
    }

    function requestVRF() public managerOnly {
        // Send request to ChainLink VRF
        consumerContract.requestRandomWords();
        lottery_state = LOTTERY_STATE.CALCULATING_WINNER;
    }

    function checkVRFResponse() internal view returns(bool fulfilled, uint[] memory randomNumbers) {
        uint requestID = consumerContract.lastRequestId();
        (fulfilled, randomNumbers) = consumerContract.getRequestStatus(requestID);
    }

    // function randomizer() internal view returns(uint) {
    //     return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    // }

    function pickWinner() public managerOnly {
        require(lottery_state == LOTTERY_STATE.CALCULATING_WINNER, "Lottery is not in calculating winner state");

        (bool fulfilled, uint[] memory randomNumbers) = checkVRFResponse();
        require(fulfilled, "Random number request has not been fulfilled"); // Check if random number has been received

        require(players.length >= 3, "Must be at least 3 players");
        // uint index = randomizer() % players.length;
        uint index = randomNumbers[0] % players.length;
        address payable winner = players[index];

        // Transfer manager fee
        (bool sentManager, ) = manager.call{
            value: 0.001 ether * players.length
        }("");
        require(sentManager, "Failed to sent manager fee");

        // Transfer smart contract's balance to winner's address
        (bool sentWinner, ) = winner.call{
            value: address(this).balance
        }("");
        require(sentWinner, "Failed to send winner's prize");
        roundId++; // Start from 1
        roundToWinner[roundId] = winner;
        players = new address payable[](0);

        lottery_state = LOTTERY_STATE.OPEN;
    }

    function closeLottery() public managerOnly {
        require(players.length == 0, "Players have entered");
        lottery_state = LOTTERY_STATE.CLOSE;
    }
}