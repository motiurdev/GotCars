import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = email => {
        const user = { email }
        // make new admin
        fetch("https://evening-retreat-05338.herokuapp.com/user/admin", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("admin successfully added")
                }
            })
    };
    return (
        <div className="w-75 mx-auto py-5">
            <h1 className="text-center py-3">Make <span className="sub-title">Admin</span></h1>
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Email" {...register("email", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;