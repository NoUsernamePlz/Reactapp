import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
  
    if (!walletAddress.trim()) {
      setError('Wallet address field cannot be empty');
      return;
    }

    // Validate Ethereum address 
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!ethAddressRegex.test(walletAddress)) {
      setError('Invalid Ethereum address format');
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber < 0 || amountNumber > 10000) {
      setError('Amount must be a number within the range of 0 - 10,000');
      return;
    }

    try {
      // Sending data to Firestore
      const res = await fetch(
        "https://userdata-f6bea-default-rtdb.firebaseio.com/transactions.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletAddress,
            amount
          }),
        }
      );

      if (res.ok) {
        alert("Data submitted successfully to the database!");
        navigate('/');
      } else {
        throw new Error('Failed to submit data to the database');
      }
    } catch (error) {
      console.error('Error submitting data to the database', error);
      setError('Error submitting data, please try again later');
    }
  };

  return (
    <div className='flex items-center justify-center'>
     
      <form className='w-[60vw] h-[80vh] bg-slate-500 text-white  flex flex-col items-center justify-center xs:max-lg:w-[100vw]'>
        <div className='w-full h-[15vh] flex items-center justify-center xs:max-lg:flex-col'>
          <label className='text-xl font-semibold p-3 text-left w-[20vw] xs:max-lg:text-lg'>Wallet Address:</label>
          <input
          className='w-[40vw] h-[5vh] rounded-sm text-black px-2'
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className='w-full h-[15vh] flex items-center justify-center xs:max-lg:flex-col '>
          <label className='text-xl font-semibold p-3 text-left w-[20vw] xs:max-lg:text-lg'>Amount:</label>
          <input
            className='w-[40vw] h-[5vh] rounded-sm text-black px-2' 
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit} className='bg-slate-700 hover:bg-slate-300 w-[8vw] h-[5vh]  xs:max-lg:w-[15vw] p-3 flex items-center justify-center rounded-md hover:text-black'>
          Submit
        </button>
        {error && <p className='text-red-500 text-lg'>{error}</p>}
      </form>
    </div>
  );
};

export default Transaction;
