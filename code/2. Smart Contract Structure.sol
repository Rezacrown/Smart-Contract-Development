// SPDX-License-Identifier: Unlicense

// Specify Solidity version for the compiler
// Ensures the compiler understands the required version to compile the smart contract successfully
// Version syntax format:
// ^ (caret symbol) indicates that the compiler should use at least the specified version up to the latest minor version
// It is generally better to use a specific version if compatibility issues are a concern
pragma solidity ^0.8.0;

// Define a new contract named Inbox
// This contract behaves similarly to a class in object-oriented programming
// An instance of the contract is what gets deployed
contract Inbox {

    // Declare a state variable
    // This is a storage variable, meaning its value is stored persistently on the blockchain
    // Here, we declare a variable 'message' of type string
    // 'public' makes this variable accessible from outside the contract
    // 'message' is the name of the variable
    string public message;

    // This function is called at contract deployment
    // It is a constructor function
    // The constructor is automatically called once when the contract is deployed
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // This function can be called after the contract is deployed
    // 'public' means it can be called by anyone
    // 'private' would mean it can only be called by this contract
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // 'view' specifies that this function only reads data and does not modify the state
    // 'constant' in older versions means the function does not modify state (used prior to Solidity 0.5.0)
    // 'pure' indicates that the function neither reads nor modifies the state, typically used for helper functions
    // 'payable' means that when the function is called, it can receive ETH
    // The types of functions specified vary
    // In Solidity, you cannot return data from functions that modify the state (although this produces no errors)
    function getMessage() public view returns (string memory) {
        return message;
    }
}
