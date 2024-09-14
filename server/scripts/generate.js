const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp256k1.utils.randomPrivateKey();

console.log("private key:", toHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey);

console.log("full public key:", toHex(publicKey));

function getAddress(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-20);
}

console.log("public key (address):", toHex(getAddress(publicKey)));
