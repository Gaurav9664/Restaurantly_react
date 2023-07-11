import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import Heading from '../UI/Heading/Heading'

function Home(props) {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
                <div className="row">
                    <div className="col-lg-8">
                        <Heading type={'h1'}>Welcome to <span>Restaurantly</span></Heading>
                        <Heading type={'h2'}>Delivering great food for more than 18 years!</Heading>
                        <div className="btns">
                            <Link to={'/menu'} > <Button >Our Menu</Button> </Link>
                            <Link to={'/bookTabal'}><a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
                        <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home;