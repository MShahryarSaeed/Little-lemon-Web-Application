import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';


const Card = ({image,heading,text,price}) => {
    return (
        <div className="card  custom-card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top " alt="..." />
        <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{heading}</h5>
          <h5 className="card-price text-danger">${price}</h5>
        </div>
          <p className="card-text">
           {text}
          </p>
          <h4 className='delivery-order'>Order a Delivery</h4>
        </div>
      </div>
      
    )
}

export default Card;