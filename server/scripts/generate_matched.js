const {
  getRandomPrivateKey,
  getHexAddressFromPublicKey,
  getPublicKeyFromPrivateKey,
  toHex,
} = require('../utils/key');

keyAddressPair = {
  '0x1': undefined,
  '0x2': undefined,
  '0x3': undefined
}

// Loop over the key-value pairs in the object
for (const [expectPublicAddr, _] of Object.entries(keyAddressPair)) {
  let privateKey, publicKey, addr;

  // Generate keys and address until the expected public address matches
  do {
    privateKey = getRandomPrivateKey();
    publicKey = getPublicKeyFromPrivateKey(privateKey);
    addr = getHexAddressFromPublicKey(publicKey);
  } while (addr !== expectPublicAddr);

  // Update the keyAddressPair with the generated key, public key, and address
  keyAddressPair[expectPublicAddr] = {
    'private': toHex(privateKey),
    'public': toHex(publicKey),
    'addr': addr
  };
}

console.log(keyAddressPair);