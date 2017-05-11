var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('01020304'),
  addressVersion: 115,
  privKeyVersion: 243,
  P2SHVersion: 60,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('db7deaf6d5c4653139359954bd05cba789b58d3529f40b225387255bc3000000'),
    merkle_root: hex('6aca6b84e3e38830451ae0a29716b7964e6dbb6d1e6a5843a1041300b74081bd'),
    height: 0,
    nonce: 4494437,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1494315848,
    bits: 486604799
  },
  dnsSeeds: [
    'seed.oracoin.com',
	  'seed1.oracoin.com',
    'seed2.oracoin.com',
    'seed3.oracoin.com',
    'seed4.oracoin.com',
    'seed5.oracoin.com'
  ],
  defaultClientPort: 15556,
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('01020304'),
  addressVersion: 115,
  privKeyVersion: 243,
  P2SHVersion: 60,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('db7deaf6d5c4653139359954bdb07c9a58db589342bf0b225387255bc3000000'),
    merkle_root: hex('6aca6b84e3e38830451ae0a29716b7964e6dbb6d1e6a5843a1041300b74081bd'),
    height: 0,
    nonce: 4494437,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1494315848,
    bits: 486604799
  },
  dnsSeeds: [
    'seed.oracoin.com',
    'seed1.oracoin.com',
    'seed2.oracoin.com',
    'seed3.oracoin.com',
    'seed4.oracoin.com',
    'seed5.oracoin.com'
  ],
  defaultClientPort: 15556,
};
