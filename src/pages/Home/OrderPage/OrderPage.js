import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const OrderPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [orderData, setOrderData] = useState({})
    const { id } = useParams()
    const { user } = useAuth()

    // load car details
    useEffect(() => {
        console.log(orderData);
        fetch(`https://evening-retreat-05338.herokuapp.com/orderPage/${id}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [id])

    // place order
    const onSubmit = data => {
        data.orderDetail = orderData;
        data.status = "pending";
        fetch('https://evening-retreat-05338.herokuapp.com/orderPlace', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booking Successful")
                    reset()
                }
            })


    };
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {/* single Booking data */}
                    <div className="col-md-6">
                        <div>
                            <img src={orderData.img} alt="" className="img-fluid rounded" />
                        </div>
                        <h4 className="my-3 header-title">{orderData.title}</h4>
                        <p className="my-3 text-muted">{orderData.des}</p>
                        <h5>Price: ${orderData.price}</h5>
                    </div>
                    <div className="col-md-6 login-form ps-5">
                        {/* Booking Place */}
                        <h2 className="text-center header-title pb-3 sub-title">Order Place</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <input placeholder="Phone" type="number" {...register("phone", { required: true })} />
                            <input placeholder="Address" {...register("address")} />
                            <input defaultValue={new Date()} {...register("date")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;