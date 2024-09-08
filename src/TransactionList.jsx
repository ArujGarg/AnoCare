// src/TransactionList.js
import React, { useEffect, useState } from 'react';
import { getTransactions } from './aptosService';

const TransactionList = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const txss = await getTransactions(address);
        setTransactions(txss);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [address]);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error fetching transactions: {error.message}</p>;

  return (
    // <div>
    //   <ul>
    //     {transactions.map((txs, index) => (
    //       <li key={index}>

    //         <p><strong>Sender:</strong> {txs.sender} <strong>Donated!</strong></p>

    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
  <ul>
    {transactions.slice(0, 6).map((txs, index) => (
      <li key={index}>
        <p><strong>Sender:</strong> {txs.sender} <strong>Donated!</strong></p>
      </li>
    ))}
  </ul>
</div>

  );
};

export default TransactionList;
