import React from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
import Logo from './UI/Logo';
import Footer from './UI/Footer';

const App = () => {
  return (
    <div className={classes.Grid}>
      <div className={classes.Logo}>
        {' '}
      </div>
      <div className={classes.Header}>
        <h1> nft marketplace</h1>
      </div>
    <div className={classes.Address}><h3>my address: 0x082937328972637263723728</h3></div>
      <div className={classes.Child}>
        <Card />
        <Footer />
      </div>
    </div>
  );
};

export default App;
