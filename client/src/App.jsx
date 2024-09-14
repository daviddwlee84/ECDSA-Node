import Wallet from "./Wallet";
import Transfer from "./Transfer";
import Balances from "./Balances";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [refreshBalances, setRefreshBalances] = useState(false); // New state to trigger balances refresh
  // Function to toggle refresh state
  const triggerRefreshBalances = () => {
    setRefreshBalances((prev) => !prev); // Toggling state to trigger useEffect in Balances component
  };

  return (
    <div className="app">
      <Wallet
        balance={balance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} privateKey={privateKey} onTransfer={triggerRefreshBalances} />
      <div className="balances-wrapper">
        <Balances refreshBalances={refreshBalances} />
      </div>
    </div>
  );
}

export default App;
