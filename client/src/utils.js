import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

const LAST_K_BYTES_AS_ADDR = 1;
const LAST_K_DIGITS_AS_ADDR = 1;

export const getRandomPrivateKey = () => {
  const privateKey = secp256k1.utils.randomPrivateKey();
  return privateKey;
}

export const getPublicKeyFromPrivateKey = (privateKey) => {
  const publicKey = secp256k1.getPublicKey(privateKey);
  return publicKey;
}

export const getAddressFromPublicKey = (publicKey) => {
  return keccak256(publicKey.slice(1)).slice(-LAST_K_BYTES_AS_ADDR);
}
export const getHexAddressFromPublicKey = (publicKey) => {
  return `0x${toHex(getAddressFromPublicKey(publicKey)).slice(-LAST_K_DIGITS_AS_ADDR)}`
}
