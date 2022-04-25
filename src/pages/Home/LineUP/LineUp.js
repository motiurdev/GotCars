import React from 'react';
import { Link } from 'react-router-dom';
import lineImage from '../../../images/ezgif-5-e105b9948f.jpg'

const LineUp = () => {
    return (
        <div className='container pb-5 pt-4'>
            <div className="lineup-title text-center pb-4">
                <h2>Something for Everyone</h2>
                <p className='text-secondary'>See our full lineup of vehicles and find the one that best fits you.</p>
                <Link to="/cars">   <button className='btn-regular'>All Vehicles</button></Link>
            </div>
            <div>
                <img src={lineImage} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default LineUp;