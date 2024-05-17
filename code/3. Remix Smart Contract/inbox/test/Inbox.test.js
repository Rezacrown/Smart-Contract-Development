// Import the assertion module for writing test cases.
const assert = require("assert");
// Import the ganache-cli module to simulate an Ethereum blockchain.
const ganache = require("ganache-cli");
// Import Web3 module; note that the correct import statement should be: `const Web3 = require("web3");`
const { Web3 } = require("web3");
// Create an instance of Web3 using Ganache as the Ethereum provider.
const web3 = new Web3(ganache.provider());

// Import the ABI and bytecode from the compiled contract.
const { abi, evm } = require("../compile");

// Declare variables for storing the accounts and the deployed contract instance.
let accounts;
let inbox;
// Set a constant for the initial message for the contract.
const INITIAL_MESSAGE = "Hello";

// Before each test, setup the contract deployment.
beforeEach(async () => {
  // Retrieve the list of accounts from Ganache.
  accounts = await web3.eth.getAccounts();

  // Deploy the contract using the ABI and bytecode, initializing with the initial message.
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object, // Contract bytecode as specified in the compiled output.
      arguments: [INITIAL_MESSAGE], // Constructor arguments.
    })
    .send({
      from: accounts[0], // Use the first account to deploy the contract.
      gas: "1000000", // Set a gas limit for the transaction.
      gasPrice: "5000000000", // Set the gas price.
    });
});

// Define a test suite for the Inbox contract.
describe("Inbox", () => {
  // Test to verify that the contract is successfully deployed.
  it("deploys a contract", () => {
    // Use assert.ok to check if the contract has a truthy address.
    assert.ok(inbox.options.address);
  });

  // Test to verify the initial message of the contract.
  it("has initial message", async () => {
    // Access the message function of the contract.
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });

  // Test to verify that the message can be changed.
  it("can change message", async () => {
    const newMessage = "Bye";
    // Send a transaction to change the message.
    await inbox.methods.setMessage(newMessage).send({ from: accounts[0], gasPrice: "5000000000" });
    // Verify the message has been updated.
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});
