import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />

        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    </nav>
  )
}

export default Header;