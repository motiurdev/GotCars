import React from 'react';
import "./Dashboard.css"
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth()

    window.scrollTo(0, 0)
    return (
        <div>
            <div className="sidebar">
                {
                    !admin ? <div>
                        <Link to="/"><i className="fas fa-home web-icon"></i> Home</Link>
                        <Link to={`${url}`}><i className="fas fa-columns web-icon"></i> Dashboard</Link>
                        <Link to={`${url}/myorders`}><i className="fas fa-shopping-cart web-icon"></i> My Orders</Link>
                        <Link to={`${url}/review`}><i className="fas fa-star web-icon"></i> Review</Link>
                        <Link to={`${url}/pay`}><i className="fab fa-paypal web-icon"></i> Pay</Link>
                        <button className="order-btn ms-2 mt-3 mb-3" onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></button>
                    </div> :
                        <div>
                            <Link to="/"><i className="fas fa-home web-icon"></i> Home</Link>
                            <Link to={`${url}/manageOrders`}><i className="fas fa-tasks web-icon"></i> Manage Orders</Link>
                            <Link to={`${url}/addProduct`}><i className="fas fa-plus web-icon"></i> Add Product</Link>
                            <Link to={`${url}/makeAdmin`}><i className="fas fa-user-shield web-icon"></i> Make Admin</Link>
                            <Link to={`${url}/manageProducts`}><i className="fas fa-list-ul web-icon"></i> Manage Products</Link>
                            <Link to="/home">
                                <button className="dasboard-logout" onClick={logOut}><i className="fas fa-sign-out-alt"></i> Logout</button>
                            </Link>
                        </div>
                }
            </div>

            <div className="content">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay/:paymentId`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;