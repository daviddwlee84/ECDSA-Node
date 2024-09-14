import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

const LAST_K_BYTES_AS_ADDR = 1;
const LAST_K_DIGITS_AS_ADDR = 1;

export const getRandomPrivateKey = () => {
  const privateKey = secp256k1.utils.randomPrivateKey();
  return privateKey;
}

export const getPublicKeyFromPrivateKey = (privateKey) => {
  try {
    const publicKey = secp256k1.getPublicKey(privateKey);
    return publicKey;
  } catch (ex) {
    console.log(`Found invalid private key when getting public key: ${privateKey}`, ex)
    return undefined;
  }
}

export const getAddressFromPublicKey = (publicKey) => {
  return keccak256(publicKey.slice(1)).slice(-LAST_K_BYTES_AS_ADDR);
}
export const getHexAddressFromPublicKey = (publicKey) => {
  return `0x${toHex(getAddressFromPublicKey(publicKey)).slice(-LAST_K_DIGITS_AS_ADDR)}`
}

export function hashTransaction(amount, recipient) {
  return keccak256(utf8ToBytes(`Transfer ${amount} to ${recipient}`))
  // return keccak256(utf8ToBytes(JSON.stringify({ amount: amount, recipient: recipient })))
}

export function signTransactionHash(txHash, privateKey) {
  try {
    return secp256k1.sign(txHash, privateKey);
  } catch (ex) {
    console.log(`Found invalid private key when signing transaction hash: ${privateKey}`, ex)
    return undefined;
  }

}

// Export toHex directly as it was imported
export { toHex, utf8ToBytes };
