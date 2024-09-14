const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const LAST_K_DIGITS_AS_ADDR = 5;

function getRandomPrivateKey() {
  const privateKey = secp256k1.utils.randomPrivateKey();
  return privateKey;
}

function getPublicKeyFromPrivateKey(privateKey) {
  const publicKey = secp256k1.getPublicKey(privateKey);
  return publicKey;
}

function getAddressFromPublicKey(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-LAST_K_DIGITS_AS_ADDR);
}

module.exports = {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  toHex,
}