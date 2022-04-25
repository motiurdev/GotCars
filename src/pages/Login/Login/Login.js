import React from 'react';
import loginImg from '../../../images/undraw_authentication_fsn5.svg';
import { useForm } from "react-hook-form";
import './Login.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, authError, loginUser } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
    };
    return (
        <div className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 login-form">
                        <h3 className="py-3 text-center mb-3">Login Form</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" />
                            <input type="password" {...register("password", { required: true })} placeholder="Password" />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" value="Login" />
                        </form>
                        <NavLink to="/register" className="normal-text">Create Account? Please Register</NavLink>
                        {user.email && <div className="alert alert-success" role="alert">Login Successful</div>}
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

export default Login;