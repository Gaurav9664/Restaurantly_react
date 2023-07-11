import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

function Header(props) {
    return (
        <header id="header" className="fixed-top d-flex align-items-cente">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><Link className="nav-link scrollto active" to={'/'}>Home</Link></li>
                        <li><Link className="nav-link scrollto" to={'/abount'}>About</Link></li>
                        <li><Link className="nav-link scrollto" to={'/menu'}>Menu</Link></li>
                        <li><Link className="nav-link scrollto" to={'/specials'}>Specials</Link></li>
                        <li><Link className="nav-link scrollto" to={'/events'}>Events</Link></li>
                        <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                        <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
                <Link to={'/bookTabal'}><Button>Book Tabal</Button></Link>
            </div>
        </header>
    );
}

export default Header;