import React from 'react';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.Grid}>
      <h1>nft Marketplace</h1>
      <div className={classes.Card}>
        <h2>ERC-721</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      <footer><p>V 0.01 / 2021 &copy; IBNZ DEVELOPERS</p></footer>
      </div>
    </div>
  );
};

export default App;
