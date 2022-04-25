import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBar from '../../Shared/TopBar/TopBar';
import OrderPage from './OrderPage';

const OrderHome = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <OrderPage></OrderPage>
        </div>
    );
};

export default OrderHome;