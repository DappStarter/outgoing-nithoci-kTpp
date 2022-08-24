require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hunt produce border tell notice crime remember snake inner drop sugar spirit'; 
let testAccounts = [
"0x3b84d54dcbe7505f34322d55ebcc641b63f6d0526d182c6dd51d0a9f22db9fbd",
"0x53f05ffee59d6565c486bb3cef29509b147ad4165c37528fdf0f68cb69b61df6",
"0xdd93a546284d57d4e3104a7ca8f420e290e0eccc161607dc6216e23c4cb93aba",
"0x912aeea2de4c18d9a75c34bc3491c658f73e82296bde5a0ef81c692dc1e7ad98",
"0xf4d5f0a7d0d63535b2ebd87b90a4f652cd7278f30b264419fbe617681dc9fff1",
"0x11ec226a8e9686fafc8025849303ae895c975bc93476918625c6618af58fdfb1",
"0x52f37ed7e47ec6bdd64b47b2e05dc33146b8b25faeee64e30943f065ed4aa6f4",
"0xed17f0a47ea9d42a89d025a36c5a23de47e39a3f42e3e777df3dfa7ec760aa9c",
"0xe430b868b32dbd61373a30b06db8ee0da4872d2c92e50acf9d29f3509a1262b4",
"0x264db5ef5d0d4e6664ace204400f7aed6a392d1bb920ef27ccf5db1b2850b616"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


