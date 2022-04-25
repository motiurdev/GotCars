import React from 'react';
import dashboardImg from '../../../images/undraw_dashboard_re_3b76.svg'

const DashboardHome = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-center py-4 sub-title">Welcome to your Dashboard</h1>
                <img src={dashboardImg} className="img-fluid w-50" alt="" />
            </div>
        </div>
    );
};

export default DashboardHome;