import React, { useEffect, useState } from "react";
import server from "./server";

function Balances({ refreshBalances }) { // Accept refreshBalances prop
  const [balances, setBalances] = useState({});

  // Fetch data from the server when the component mounts or when refreshBalances changes
  useEffect(() => {
    async function fetchBalances() {
      try {
        const {
          data: { balances },
        } = await server.get("balances");
        setBalances(balances);
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    }

    fetchBalances();
  }, [refreshBalances]); // Add refreshBalances as a dependency to trigger re-fetch

  return (
    <div>
      <h1>Balances</h1>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(balances).map(([address, balance]) => (
            <tr key={address}>
              <td>{address}</td>
              <td>{balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Balances;
