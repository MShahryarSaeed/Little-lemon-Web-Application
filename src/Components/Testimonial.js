import React from 'react';
// import user from '../assets/user.jpeg'
import TestimonoalCard from './TestimonoalCard';

const Testimonial = () => {
    const data = [
        {
            img: require("../assets/user.jpeg"),
            rating: "Rating"

        },
        {
            img: require("../assets/user.jpeg"),
            rating: "Rating"

        },
        {
            img: require("../assets/user.jpeg"),
            rating: "Rating"

        },
        {
            img: require("../assets/user.jpeg"),
            rating: "Rating"

        },
    ]
    return (
        <div className='container-fluid testimonial'>
            <h1 className=' '>Testimonial</h1>
            <div className="row testimonial-boxes">
                {
                    data.map((card, index) => (
                        <div className="col-md-3 box" key={index}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <TestimonoalCard img={card.img} heading={card.rating} />

                            </div>
                           

                        </div>
                    ))
                }
           
            </div>

        </div>
    )
}

export default Testimonial;