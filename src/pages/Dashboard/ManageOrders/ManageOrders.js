import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css'

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([])

    useEffect(() => {
        // load all user orders
        fetch('https://evening-retreat-05338.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [manageOrders])
    return (
        <div className="py-5">
            <h1 className="text-center py-3">Mangage <span className="sub-title">All Orders</span></h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageOrders.map((manageOrder, index) => <ManageOrder
                            key={manageOrder._id}
                            manageOrder={manageOrder}
                            setManageOrders={setManageOrders}
                            manageOrders={manageOrders}
                            index={index}
                        ></ManageOrder>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;