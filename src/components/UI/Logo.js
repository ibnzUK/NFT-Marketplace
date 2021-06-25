import React from 'react';
import logo from '../../assets/logo.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo icon" className={classes.logo} />
    </div>
  );
};

export default Logo;
