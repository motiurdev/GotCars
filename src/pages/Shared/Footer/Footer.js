import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/footer-image.png'
import './Footer.css'

const Footer = () => {
    const [datas, setDatas] = useState([])
    // load feature cars
    useEffect(() => {
        fetch('https://evening-retreat-05338.herokuapp.com/featureCars')
            .then(res => res.json())
            .then(data => setDatas(data.slice(0, 6)))
    }, [])

    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-3 pe-3">
                        <img src={logo} className="img-fluid" alt="" />
                        <p className="text-secondary mt-4">Gotcars is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. If you found your way to this page, you want to know more about us.</p>
                        <div className="social-icon">
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4">Quick Links</h5>
                        <div className="d-flex flex-column footer-menu">
                            <NavLink to="/home" className="nav-menu">Home</NavLink>
                            <NavLink to="/cars" className="nav-menu">Products</NavLink>
                            <NavLink to="/dashboard" className="nav-menu">Dashboard</NavLink>
                            <NavLink to="/login" className="nav-menu">Login</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4">Image Gallery</h5>
                        <div className="row">
                            {
                                datas.map(data => (
                                    <div
                                        key={data._id}
                                        className="col-md-5 mb-3">   <img src={data.img} style={{ height: "100%" }} className="img-fluid rounded" alt="" /></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4">Contact Us</h5>
                        <div className="row">
                            <div className="col-md-2">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col-md-10">
                                <p>   203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="col-md-10">
                                <p>+2 392 3929 210</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <i className="fas fa-paper-plane"></i>
                            </div>
                            <div className="col-md-10">
                                <p>info@carshire.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="text-center pt-5"> All rights reserved Copyright © 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;