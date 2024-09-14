const {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  getHexAddressFromPublicKey,
  toHex,
} = require('../utils/key');

const privateKey = getRandomPrivateKey();

console.log("private key:", toHex(privateKey));

const publicKey = getPublicKeyFromPrivateKey(privateKey);

console.log("full public key:", toHex(publicKey));

console.log("public key (address) (old):", toHex(getAddressFromPublicKey(publicKey)));
console.log("public key (address):", getHexAddressFromPublicKey(publicKey));
