import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Navlogo-removebg-preview.png';
import '../App.css';
 
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/booking">
              Booking
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
         
         
        </ul>
        
      </div>
    </div>
  </nav>
  
  )
}

export default Navigation;