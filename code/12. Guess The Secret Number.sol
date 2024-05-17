// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.21;

contract GuessTheNumberChallenge {
    bytes32 answer = 0x6f84ad4a5f5b7c14e9d39fcbdb6c5b7759a1b5dfe4c22b15b431d058409b64d9;

    function GuessTheNumberChallenge() public payable {
        require(msg.value == 1 ether);
    }

    function isComplete() public view returns(bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        require(msg.value == 1 ether);

        if (n == answer) {
            msg.sender.transfer(2 ether);
        }
    }
}