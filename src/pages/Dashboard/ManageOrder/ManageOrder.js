import React from 'react';

const ManageOrder = (props) => {
    const { name, date, status, _id, email } = props.manageOrder;
    const { title, price } = props.manageOrder.orderDetail;


    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure? You want to delete this order")
        if (confirm) {
            fetch(`https://evening-retreat-05338.herokuapp.com/deleteOrders/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = props.manageOrders.filter(manageOrder => manageOrder._id !== id)
                        props.setManageOrders(remainder)
                    }

                })
        }
    }

    const handleStatus = (id) => {
        fetch(`https://evening-retreat-05338.herokuapp.com/handleStatus/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                }
            })
    }
    return (
        <tr>
            <td>{props.index}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>${price}</td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>
                {/* delete button */}
                <button className="order-btn mb-1" onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i> Delete</button>
                {/* status button */}
                <button className="order-btn ms-2" onClick={() => handleStatus(_id)}><i className="fas fa-tags"></i> {status}</button>
            </td>
        </tr >
    );
};

export default ManageOrder;