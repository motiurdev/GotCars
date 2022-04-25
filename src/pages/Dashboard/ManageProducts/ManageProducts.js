import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // load all cars
    useEffect(() => {
        setIsLoading(true)
        fetch("https://evening-retreat-05338.herokuapp.com/featureCars")
            .then(res => res.json())
            .then(data => {
                setManageProducts(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="py-5">
            <Container>
                <h2>Manage Products <span className="sub-title">Cars</span></h2>
                {isLoading ? <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            manageProducts.map(manageProduct => <ManageProduct
                                key={manageProduct._id}
                                manageProduct={manageProduct}
                                setManageProducts={setManageProducts}
                                manageProducts={manageProducts}
                            ></ManageProduct>)
                        }
                    </div>}
            </Container>
        </div>
    );
};

export default ManageProducts;