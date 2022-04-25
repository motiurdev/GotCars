import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JvuBFJJEcOTRowMK8lLWqymWT7HWDHzSC1CCwGNbf4ys1rJlqVj6RECfdBIdwJs3LyitjTVT5bm9Unn6OMsjP0a00lCS8kp5W');

const Pay = () => {
    const { paymentId } = useParams()
    const [singleOrder, setSingleOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orderPayment/${paymentId}`)
            .then(res => res.json())
            .then(data => setSingleOrder(data))
    }, [paymentId])
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-warning pt-5">Payment for {singleOrder?.orderDetail?.title}</h1>
                <h4>Price: ${singleOrder?.orderDetail?.price}</h4>
                <br />
                {singleOrder?.orderDetail?.price && <Elements stripe={stripePromise}>
                    <CheckOutForm
                        singleOrder={singleOrder?.orderDetail}
                    />
                </Elements>}
            </div>
        </div>
    );
};

export default Pay;