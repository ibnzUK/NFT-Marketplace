import React from 'react';
import Card from './UI/Card';
import classes from './App.module.css';
import Footer from './UI/Footer';

const App = () => {
  return (
    <div className={classes.Grid}>
      <h1>nft Marketplace</h1>
      <Card />
      <Footer />
    </div>
  );
};

export default App;
