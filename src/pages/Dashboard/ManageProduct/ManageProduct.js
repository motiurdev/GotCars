import React from 'react';

const ManageProduct = (props) => {
    const { img, year, title, price, transmission, engine, des, _id } = props.manageProduct;
    console.log(props.manageProduct);
    // delete product
    const handleProductDelete = (id) => {
        const confirm = window.confirm("Are your sure? You want to delete this product")
        if (confirm) {
            fetch(`https://evening-retreat-05338.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = props.manageProducts.filter(manageProduct => manageProduct._id !== id)
                        props.setManageProducts(remainder)
                    }
                })
        }
    }
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
                    <p className="card-text">{des.slice(0, 150)}....</p>
                    {/* delete button */}
                    <button className="btn-regular" onClick={() => handleProductDelete(_id)}><i className="fas fa-trash-alt"></i> Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;