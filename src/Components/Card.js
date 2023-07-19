import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';


const Card = ({image,heading,text}) => {
    return (
        <div className="card  custom-card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">
           {text}
          </p>
          <h4 className='delivery-order'>Order a Delivery</h4>
        </div>
      </div>
      
    )
}

export default Card;