import React from 'react';
import { NavLink } from 'react-router-dom';

const AllFeatureCar = (props) => {
    const { title, des, img, price, year, transmission, engine, _id } = props.allFeatureCar;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} height="280" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-8">
                            <span>NEW {year}</span>
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>${price}</h5>
                        </div>
                    </div>
                    <div className="d-flex">
                        <p className="text-secondary"><i className="fas fa-tachometer-alt"></i> {transmission}</p>
                        <p className="ms-4 text-secondary"><i className="fas fa-cogs"></i> {engine}</p>
                    </div>
                    <p className="card-text">{des.slice(0, 120)}</p>
                    {/* Buy Now button */}
                    <NavLink to={`/orderPage/${_id}`} className="btn-regular">Buy Now <i className="fas fa-caret-right"></i></NavLink>
                </div>
            </div>
        </div>
    );
};

export default AllFeatureCar;