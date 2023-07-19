import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />

        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Services</Link></li>
        </ul>
    </nav>
  )
}

export default Header;