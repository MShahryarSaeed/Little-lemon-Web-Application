import React from 'react';
import Logo from './assets/Navlogo-removebg-preview.png';
import './App.css';

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="row">
        <div className="col-md-3 col-11">
          <img src={Logo} alt="" />
        </div>
        <div className="col-md-3">
          <h3>Navigation</h3>
          <p>
            Home <br />
            About <br />
            Menu <br />
            Reservation <br />
            Order Online <br />
            Login <br />
          </p>
        </div>
        <div className="col-md-3">
        <h3>Contact Us</h3>
          <p>
            Home <br />
            About <br />
            Menu <br />
            Reservation <br />
            Order Online <br />
            Login <br />
          </p>
        </div>
        <div className="col-md-3">
        <h3>Our Social Media</h3>
          <p>
            Home <br />
            About <br />
            Menu <br />
            Reservation <br />
            Order Online <br />
            Login <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;