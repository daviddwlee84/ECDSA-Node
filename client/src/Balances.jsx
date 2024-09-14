import React, { useEffect, useState } from "react";
import server from "./server";

function Balances() {
  // TODO: this should be passed so we will refresh balances when any transfer occurred
  const [balances, setBalances] = useState({});

  // Fetch data from the server when the component mounts
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
  }, []); // Empty dependency array ensures this runs once on mount

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