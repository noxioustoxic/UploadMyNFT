const Web3 = require('web3')
const web3 = new Web3()
require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
const MNEMONIC = process.env.MNEMONIC
const ROPSTEN_URL = process.env.ROPSTEN_URL
const KOVAN_URL = process.env.KOVAN_URL
const RINKEBY_URL = process.env.RINKEBY_URL
const MAINNET_URL = process.env.MAINNET_URL
const ETHERSCANAPI_KEY = process.env.ETHERSCANAPI_KEY
const BSCSCANAPI_KEY = process.env.BSCSCANAPI_KEY

module.exports = {
  contracts_directory: './src/main',
  contracts_build_directory: './src/abis',

  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      websockets: true,
    },
    test: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      websockets: true,
    },
    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, ROPSTEN_URL),
      network_id: 3,
      skipDryRun: true,
      networkCheckTimeout: 90000,
      // gas: 4698712,
      // gasPrice: 47000000000,
    },
    kovan: {
      provider: () => new HDWalletProvider(MNEMONIC, KOVAN_URL),
      network_id: 42,
      skipDryRun: true,
      networkCheckTimeout: 90000,
      gas: 4698712,
      gasPrice: 47000000000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, RINKEBY_URL),
      network_id: 4,
      skipDryRun: true,
      networkCheckTimeout: 90000,
      // gas: 4698712,
      gasPrice: 5000000000,
    },
    // main ethereum network(mainnet)
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, MAINNET_URL),
      network_id: 1,
      skipDryRun: true,
      networkCheckTimeout: 90000,
      // gas: 4698712,
      gasPrice: 190000000000,
    },
    // bsc test net
    bscTestnet: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          'https://data-seed-prebsc-1-s1.binance.org:8545',
        ),
      network_id: 97,
      // gas: 4698712,
      // gasPrice: 10000000000
    },
    // bsc main net
    bscMainnet: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, 'https://bsc-dataseed.binance.org'),
      network_id: 56,
      // gas: 4698712,
      gasPrice: 5000000000,
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Auto publish and verify contract
  plugins: ['truffle-plugin-verify', 'truffle-contract-size'],
  api_keys: {
    etherscan: ETHERSCANAPI_KEY,
    bscscan: BSCSCANAPI_KEY,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.9',
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        // evmVersion: "byzantium"
      },
    },
  },

  db: {
    enabled: false,
  },
}
