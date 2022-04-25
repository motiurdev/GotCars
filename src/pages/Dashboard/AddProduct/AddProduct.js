import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("https://evening-retreat-05338.herokuapp.com/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Successfully")
                    reset()
                }
            })
    }
    return (
        <div className="w-75 mx-auto py-5">
            <h1 className="text-center py-3">Add <span className="sub-title">Product</span></h1>
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Title"  {...register("title", { required: true })} />
                    <textarea placeholder="Description" {...register("des", { required: true })} />
                    <input placeholder="Image Url" {...register("img", { required: true })} />
                    <input type="number" placeholder="Year" {...register("year", { required: true })} />
                    <input placeholder="Transmission Ex: Manual" {...register("transmission", { required: true })} />
                    <input placeholder="Engine Type" {...register("engine", { required: true })} />
                    <input type="number" placeholder="Price" {...register("price", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;