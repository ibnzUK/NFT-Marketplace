import React from 'react';
import './Footer.module.css';

const Footer = (props) => {
  return (
    <footer>
      <p>V 0.01 {props.network.toUpperCase()} / 2021 &copy; IBNZ DEVELOPERS</p>
    </footer>
  );
};

export default Footer;
