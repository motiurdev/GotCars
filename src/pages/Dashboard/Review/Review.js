import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Review.css'



const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()

    const onSubmit = data => {
        // add user review
        fetch("https://evening-retreat-05338.herokuapp.com/review", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Successful")
                }
                reset()
            })
    };

    return (
        <div className="w-75 mx-auto py-5">
            <h1 className="text-center sub-title py-2">Review</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name", { required: true })} />
                    <input type="email" defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="job" {...register("job", { required: true })} />
                    <textarea placeholder="Message" {...register("description", { required: true })} />
                    <input placeholder="Rating" type="number" max="5" min="0" {...register("star", { required: true })} />


                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;