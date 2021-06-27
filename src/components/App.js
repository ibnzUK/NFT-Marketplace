import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
import Web3 from 'web3';
import Footer from './UI/Footer';

const App = () => {
  const [userAddress, setUserAddress] = useState('Not detected');
  const [currentNetwork, setCurrentNetwork] = useState('none');

  useEffect(() => {
    //connecting to ethereum blockchain
    const ethEnabled = async () => {
      fetchDataFromBlockchain();
    };

    ethEnabled();
  }, []);

  const fetchDataFromBlockchain = async () => {
    if (window.ethereum) {
      // await window.ethereum.send('eth_requestAccounts');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);

      //connecting to metamask
      let web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      setUserAddress(accounts[0]);

      //loading users network ID and name
      const networkId = await web3.eth.net.getId();
      const networkType = await web3.eth.net.getNetworkType();
      console.log(networkType);
      setCurrentNetwork(networkType);
      console.log(networkId);
    } else {
      window.alert(
        'Metamask Not Detected'
      );
    }
  };

  return (
    <>
      <div className={classes.Grid}>
        <div className={classes.Logo}></div>
        <div className={classes.Header}>
          <h1> nft marketplace</h1>
        </div>
        <div className={classes.Address}>
          <h3>User: {userAddress}</h3>
        </div>
        <div className={classes.Child}>
          <Card />
          <Footer network={currentNetwork} />
        </div>
      </div>
    </>
  );
};

export default App;
