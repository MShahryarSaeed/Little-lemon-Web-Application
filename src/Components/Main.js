import React from 'react';
import Hero from '../assets/restauranfood.jpg';
import '..//App.css';

const Main = () => {
  return (
    <div className='container-fluid '>
      <div className="row justify-content-center  heroSection">
        <div className=" col-md-6  col-11 heroSection-text">
          <h1>Little Lemon</h1>
          <h3>Pakistan</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut similique doloribus, mollitia dolor maiores excepturi officiis nemo doloremque nobis molestiae. Blanditiis necessitatibus ducimus, consequatur nisi similique dolore.
          </p>
          <button>RESERE A TABLE</button>
         

        </div>
        <div className=" col-md-4  heroimg">
          <img src={Hero} alt="heroimg" className='img-fluid ' />

        </div>

      </div>
    </div>
  )
}

export default Main;