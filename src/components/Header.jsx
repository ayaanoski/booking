import React from 'react';
import './Header.css';
import logo from '../assets/marathon.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Marathon Logo" />
      </div>
      <h1 className="marathon-title">Annual Marathon 2K25</h1>
      <div className="login-button">
        <button onClick={() => alert('Login clicked!')}>Login</button>
      </div>
    </header>
  );
};

export default Header;
