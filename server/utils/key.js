const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const LAST_K_BYTES_AS_ADDR = 1;
const LAST_K_DIGITS_AS_ADDR = 1;

function getRandomPrivateKey() {
  const privateKey = secp256k1.utils.randomPrivateKey();
  return privateKey;
}

function getPublicKeyFromPrivateKey(privateKey) {
  const publicKey = secp256k1.getPublicKey(privateKey);
  return publicKey;
}

function getAddressFromPublicKey(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-LAST_K_BYTES_AS_ADDR);
}
function getHexAddressFromPublicKey(publicKey) {
  return `0x${toHex(getAddressFromPublicKey(publicKey)).slice(-LAST_K_DIGITS_AS_ADDR)}`
}

module.exports = {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  getHexAddressFromPublicKey,
  toHex,
}