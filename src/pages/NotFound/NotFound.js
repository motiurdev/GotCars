import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/2469985-ai.png'

const NotFound = () => {
    return (
        <div className="container">
            <div className="text-center pb-4">
                <img src={notFoundImg} className="img-fluid w-50" alt="" />
                <h1 className="primary-color pb-4 fw-bold">Page Not Found 404</h1>
                <Link to="/home" className="btn-regular">Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;