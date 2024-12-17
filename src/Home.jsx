import React from 'react';
import './App.css';
import homeBg from './assets/home_bg.jpg';

const Home = ({ onNavigate }) => {
  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="home-content">
        <h1>Welcome to the Annual City Marathon 2024</h1>
        <p>Register now and be a part of the journey!</p>
        <button className="register-button" onClick={onNavigate}>
          Register Yourself
        </button>
      </div>
    </div>
  );
};

export default Home;
