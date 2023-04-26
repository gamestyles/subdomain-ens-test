/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['0xa405206b2f3c90c7fd152356e6addf34e83d856cf29f0f17aebae4e25a49e285']
const mnemonic = 'shell company arm sell light wet radio describe worth fiscal alien offer'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        'wss://eth-mainnet.g.alchemy.com/v2/5yUakhGsT2-_Uu2FONzMtVopIe63n9eg'
      ),
      network_id: 1,
      gas: 50000000,
      gasPrice: 50000000000,
      networkCheckTimeout: 100000000,
      from: "0x6f86B4b14b35A24d9CBba4F81E06D507af5dc2E9",
      skipDryRun: true,
      confirmations: 10,
      timeoutBlocks: 90000,
    },
    goerli: {
      provider: () => new HDWalletProvider(
        mnemonic,
        'wss://eth-goerli.g.alchemy.com/v2/N9U1v9-FTL3-bzuuYuIRrBUD5uEiK90m/'
      ),
      network_id: 5,
      gas: 50000000,
      gasPrice: 50000000000,
      networkCheckTimeout: 1000000000,
      from: "0x6f86B4b14b35A24d9CBba4F81E06D507af5dc2E9",
      skipDryRun: true,
      confirmations: 10,
      timeoutBlocks: 90000,
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
};
