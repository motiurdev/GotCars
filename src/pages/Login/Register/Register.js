import React from 'react';
import loginImg from '../../../images/undraw_authentication_fsn5.svg';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, registerUser, authError } = useAuth()

    const history = useHistory()

    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert("password not't match")
            return
        }
        registerUser(data.email, data.password, data.displayName, history)

    };
    return (
        <div className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 login-form">
                        <h3 className="py-3 text-center mb-3">Register Form</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("displayName", { required: true })} placeholder="Name" />
                            <input type="email" {...register("email", { required: true })} placeholder="Email" />
                            <input type="password" {...register("password", { required: true })} placeholder="Password" />
                            <input type="password" {...register("password2", { required: true })} placeholder="Re-type Password" />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" value="Register" />
                        </form>
                        <NavLink to="/login" className="normal-text">Already Have Account? Please Login</NavLink>
                        {user.email && <div className="alert alert-success" role="alert">Account Created successful</div>}
                        {authError && <div className="alert alert-danger" role="alert">{authError}</div>}
                    </div>
                    <div className="col-md-7">
                        <img src={loginImg} className="img-fluid ps-5" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;