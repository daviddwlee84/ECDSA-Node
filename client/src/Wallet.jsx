import server from "./server";
import * as utils from "./utils";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    setPrivateKey("");
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  async function onChangePrivateKey(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const publicKey = utils.getPublicKeyFromPrivateKey(privateKey);
    if (publicKey === undefined) {
      address = "";
    }
    else {
      address = utils.getHexAddressFromPublicKey(publicKey);
    }
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <ul>
        <li>If you given private key you will get wallet address auto filled.</li>
      </ul>

      <label>
        Your Private Key
        <input placeholder="Type private key, for example: b8462aae154aeb08c18d2b537cf753d2154c1721974f4d3cb36f259d26e8d2f6" value={privateKey} onChange={onChangePrivateKey}></input>
      </label>
      <label>
        Wallet Address
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
