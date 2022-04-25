import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Testimonial.css'

const Testimonial = (props) => {
    const { name, description, job, star } = props.testimonial;
    return (
        <div className="col">
            <Card>
                <Card.Body>
                    <Card.Text>
                        {description.slice(0, 110)}
                    </Card.Text>
                    <Card.Title>{name.slice(0, 18)}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job}</Card.Subtitle>
                    <Rating
                        emptySymbol="fa fa-star-o emptySymbol"
                        fullSymbol="fa fa-star fullSymbol"
                        initialRating={star}
                        readonly
                    />
                </Card.Body>
            </Card>
        </div>
    );
};

export default Testimonial;