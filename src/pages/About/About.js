import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about_car.png'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className='about-title'><span className='sub-title'>About</span> Us</h1>
                        <p style={{ paddingRight: "30px" }} className='text-secondary'>
                            Used cars are usually overlooked in the fanfare accorded to cutting-edge electric cars and gussied-up pickup trucks. Now they are suddenly the industry’s hottest commodity. Consumers are snapping up used vehicles as second or third cars so they can avoid trains, buses, or Ubers during the coronavirus pandemic. Others are buying used rather than new to save money in an uncertain economy, not knowing when they or their spouse might lose a job. Demand for older cars has also been fed by a roughly two-month halt in the production of new cars this spring.
                            Across the country, the prices of used cars have shot up. The increase defies the conventional wisdom that cars are depreciating assets that lose a big chunk of their value the moment they leave the dealership. In July alone, the average value of used cars jumped more than 16 percent

                            “Think Out Of The Box” is a foundation created for public benefit.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <img src={aboutImg} className='img-fluid' alt="" />
                        </div>
                    </Col>
                </Row>
                <p className='text-secondary'>“Think Out Of The Box” is a foundation created for public benefit.
                    In this pandemic environment, our mission is to work to protect low and moderate-income consumers and used car buyers. We want to help every future owner of a used car, explaining in detail all the necessary steps and what problems may be facing during the whole process.</p>
            </Container>
        </div>
    );
};

export default About;