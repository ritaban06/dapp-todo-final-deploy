require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    // Local network (Ganache) configuration for development testing
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // Sepolia Test Network using Alchemy's Sepolia RPC
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.REACT_APP_MNEMONIC, // Your MetaMask mnemonic from .env file
        `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API}` 
      ),
      network_id: 11155111, // Sepolia network ID
      gas: 29988593,         // Gas limit
      gasPrice: 2000000,         // 2,000,000×5gwei=0.01ETH
      confirmations: 2,     // Wait for 2 confirmations
      timeoutBlocks: 200,   // Wait up to 200 blocks for deployment
      skipDryRun: true      // Skip dry run before migrations
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "paris"
      }
    }
  },
  // Mocha options for testing
  mocha: {
    timeout: 100000
  },
};