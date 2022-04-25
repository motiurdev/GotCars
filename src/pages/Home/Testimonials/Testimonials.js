import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonail/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    // load review
    useEffect(() => {
        fetch("https://evening-retreat-05338.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container">
            <h2 className="text-center pb-5 py-5">Customer <span className="sub-title">Testimonails</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;