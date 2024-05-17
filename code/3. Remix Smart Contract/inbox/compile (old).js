// Import the path module from Node.js to handle and transform file paths.
const path = require('path');

// Import the file system (fs) module from Node.js to interact with the file system.
const fs = require('fs');

// Import the solc (Solidity Compiler) module to compile Solidity files.
const solc = require('solc');

// Resolve the full path to the 'Inbox.sol' file within the 'contracts' directory.
// `__dirname` is a Node.js global variable that holds the directory name of the current module.
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Read the source code from the 'Inbox.sol' file synchronously, using UTF-8 encoding to ensure the text is readable.
const source = fs.readFileSync(inboxPath, 'utf-8');

// Compile the Solidity contract using solc. The second argument '1' indicates the number of contracts to compile.
// It prints the output of the compilation process to the console.
// This output includes various details about the compiled contract, such as bytecode, ABI, and more.
console.log(solc.compile(source, 1));
