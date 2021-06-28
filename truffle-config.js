require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8",  
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}

// commands for truffle
//run tests - truffle test
// call console - truffle console
// get contract - await DaiToken.deployed()
//to compile -    truffle compile
//to deploy - truffle migrate --reset

//human readible balance - web3.utils.fromWei(balance)
