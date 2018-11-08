// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18ION Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x67,
    scriptHash: 0x58,
    wif: 0x99
  },
  testnet: {
    messagePrefix: '\x18ION Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x61,
    scriptHash: 0xc4,
    wif: 0xef
  }
}
