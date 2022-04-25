import React from 'react';
import topImg from '../../../images/GOTCARS.png'
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={topImg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3">
                    <div className="row align-items-center py-3">
                        <div className="col-md-2">
                            <i className="fas fa-phone-alt fa-2x primary-color pb-2"></i>
                        </div>
                        <div className="col-md-10">
                            <p className="m-0 top-header">Call Us Now</p>
                            <span>(123) 456 7890</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row align-items-center py-3">
                        <div className="col-md-2">
                            <i className="fas fa-stopwatch fa-2x primary-color pb-2"></i>
                        </div>
                        <div className="col-md-10">
                            <p className="m-0 top-header">Opening Hours</p>
                            <span>Mon - Sat 9.00 - 19.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;