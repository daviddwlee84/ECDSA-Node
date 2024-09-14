const {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  toHex,
} = require('../utils/key');

const privateKey = getRandomPrivateKey();

console.log("private key:", toHex(privateKey));

const publicKey = getPublicKeyFromPrivateKey(privateKey);

console.log("full public key:", toHex(publicKey));

console.log("public key (address):", toHex(getAddressFromPublicKey(publicKey)));
