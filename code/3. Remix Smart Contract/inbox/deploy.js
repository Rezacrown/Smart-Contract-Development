require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    process.env.SEED_PHRASE,
    'https://sepolia.infura.io/v3/ea8e532e26c24b55b03d1a78fa5f5ea8'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('Deploying from account: ', accounts[0]);

    const deployedContract = await new web3.eth.Contract(abi)
        .deploy({
            data: evm.bytecode.object,
            arguments: ['Hello']
        })
        .send({
            from: accounts[0],
            gas: '1000000',
            gasPrice: '5000000000'
        });
    
    console.log('Contract address: ', deployedContract.options.address);

    // mencegah deployment menggantung
    provider.engine.stop();
};

deploy();