/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonicPhrase = process.env.MNEMONIC; // 12 word mnemonic

module.exports = {
  networks: {
    ganachecli: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 5777,
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      network_id: "3",
      timeoutBlocks: 500, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    ropstenNoGSN: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      network_id: "3",
      timeoutBlocks: 500, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    mumbai: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_PROJECT_ID}`
        ),
      network_id: "80001",
    },
    mumbaiNoGSN: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_PROJECT_ID}`
        ),
      network_id: "80001",
    },
    maticMainnetNoGSN: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          `https://rpc-mainnet.maticvigil.com/v1/${process.env.MATICVIGIL_PROJECT_ID}`
        ),
      network_id: "137",
      timeoutBlocks: 500, // # of blocks before a deployment times out  (minimum/default: 50)
    },
    xdaiNoGSN: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(mnemonicPhrase, "https://rpc.xdaichain.com/"),
      network_id: "100",
      timeoutBlocks: 500, // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.10",
      evmVersion: "istanbul",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
