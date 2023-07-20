import React from 'react';
import '../App.css';

const TestimonoalCard = ({img,heading}) => {
    return (
        <div >
            <div className='d-flex justify-content-between align-items-center test-content'>
                <h6>{heading}</h6>
                <p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </p>

            </div>
            <img src={img} alt="img" className='img-fluid' />

        </div>
    )
}

export default TestimonoalCard;