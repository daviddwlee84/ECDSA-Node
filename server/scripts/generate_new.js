const {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  getHexAddressFromPublicKey,
  toHex,
  verifyTransaction,
} = require('../utils/key');
const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { keccak256 } = require('ethereum-cryptography/keccak');
const { utf8ToBytes } = require('ethereum-cryptography/utils');

const privateKey = getRandomPrivateKey();

console.log("private key:", toHex(privateKey));

const publicKey = getPublicKeyFromPrivateKey(privateKey);

console.log("full public key:", toHex(publicKey));

console.log("public key (address) (old):", toHex(getAddressFromPublicKey(publicKey)));
console.log("public key (address):", getHexAddressFromPublicKey(publicKey));

function hashTransaction(sender, amount, recipient) {
  return keccak256(utf8ToBytes(`${sender} transfer ${amount} to ${recipient}`))
}

function signTransactionHash(txHash, privateKey) {
  return secp256k1.sign(txHash, privateKey);
}

const txHash = hashTransaction('0x1', 20, '0x2');
console.log("transaction hash:", toHex(txHash));


// // Recover the public key from the signature (recovery id is now internal)
signature = signTransactionHash(txHash, privateKey);
// sign = new secp256k1.Signature(signature.r, signature.s, signature.recovery);

const recoveredPublicKey = signature.recoverPublicKey(txHash).toHex();
console.log("recovered full public key:", recoveredPublicKey);
console.log("the public key are matched:", toHex(publicKey) === recoveredPublicKey);
