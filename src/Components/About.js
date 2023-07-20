import React from 'react';
import AboutPic from '../assets/restauranfood.jpg'
const About = () => {
    return (
        <section id='about'>
            <div className="container-fluid">
                <div className="row jusity-content-center  heroSection-text">
                    <div className="col-md-6 col-11 About-text ">
                        <h1>Little Lemon</h1>
                        <h3>Pakistan</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut similique doloribus, mollitia dolor maiores excepturi officiis nemo doloremque nobis molestiae. Blanditiis necessitatibus ducimus, consequatur nisi similique dolore.
                        </p>

                    </div>
                    <div className="col-md-4 about-img">
                        <img src={AboutPic} alt="AboutImage" className='img-fluid' />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;