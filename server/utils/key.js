const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex, hexToBytes, utf8ToBytes } = require("ethereum-cryptography/utils");
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

function hashTransaction(amount, recipient) {
  return keccak256(utf8ToBytes(`Transfer ${amount} to ${recipient}`));
  // return keccak256(utf8ToBytes(JSON.stringify({ amount: amount, recipient: recipient })));
}

function verifyTransaction(signature, amount, recipient) {
  sign = new secp256k1.Signature(signature.r, signature.s, signature.recovery);
  txHash = hashTransaction(amount, recipient);
  const recoveredPublicKey = sign.recoverPublicKey(txHash).toHex();
  const sender = getHexAddressFromPublicKey(hexToBytes(recoveredPublicKey));

  const transactionHash = keccak256(utf8ToBytes(`Transfer ${amount} to ${recipient}`));
  // const transactionHash = keccak256(utf8ToBytes(JSON.stringify({ amount: amount, recipient: recipient })))
  const isSigned = secp256k1.verify(sign, transactionHash, recoveredPublicKey);
  return [isSigned, sender];
}

module.exports = {
  getRandomPrivateKey,
  getPublicKeyFromPrivateKey,
  getAddressFromPublicKey,
  getHexAddressFromPublicKey,
  toHex,
  hashTransaction,
  verifyTransaction,
}