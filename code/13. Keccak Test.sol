// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.4.21;

contract Guesser {
    bytes32 answerHash = 0x6f84ad4a5f5b7c14e9d39fcbdb6c5b7759a1b5dfe4c22b15b431d058409b64d9;

    function hasher() public view returns(uint8) {
        for(uint8 i = 0; i < 255; i++) {
            if (keccak256(i) == answerHash) {
                return i;
                break;
            }
        }
    }
}