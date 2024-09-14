import { useState } from "react";
import server from "./server";
import { toHex, utf8ToBytes, hashTransaction, signTransactionHash } from "./utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};

function Transfer({ setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);
  const txHash = hashTransaction(sendAmount, recipient);
  let signature = undefined;

  if (privateKey) {
    signature = signTransactionHash(txHash, privateKey);
  }
  else {
    signature = undefined;
  }

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        signature: signature === undefined ? "" : JSON.stringify(signature),
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      console.log(ex);
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>Transaction Hash: {toHex(txHash)}</label>

      <input
        type="submit"
        className={`button ${(signature === undefined || !recipient || !sendAmount || parseInt(sendAmount) <= 0) ? 'disabled' : ''}`}
        value="Transfer"
        disabled={signature === undefined}
      />

    </form>
  );
}

export default Transfer;
