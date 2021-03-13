require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth script coach gloom ensure outer gentle'; 
let testAccounts = [
"0x805156413d0698141f0bb9e7f868c1ffced945cd619a569cb1f46d835731c261",
"0xf6b7aafe395900a3ffb5c379488950bb1e32d69aeab42cd0d45c200a15413379",
"0xef3899ed21188b1676a9da95056d729832d503da40c044371d6eb6ef9f07ed80",
"0xa28ceeeec58c68f7b710a6d1b5a440040f5761319f5fb32574a57c99c69e5dec",
"0x41091f1df852fcb6e17894e599cdea19e41e91a01a9db00a72f0eeb99d8f82f3",
"0x7bddd028dcae5f6cb6aa33098e88288931de6b535e22fd39acc3bbf707447689",
"0xbc03e1d64a2ea192763395a12a5fe711871dfba5218618e2aea6a56503f5d6fc",
"0x11776b474f5fd938688730ce83d90e81969abec3c76224128c14a460b18b3e5f",
"0xa9b4f2c1944c884f15066757dc894be63be7b7fc4c3cc2a9ce40de18a779328d",
"0x22e91e6260ece641ea7eb5d514c36a7f5fad9a8c41d7d0087c31fefa0a608d35"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
