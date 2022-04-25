import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'
import './Banner.css'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ['Mahindra eXUV300'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p>The Mahindra eXUV300 has been unveiled at the Auto Expo 2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ['Mercedes-Benz EQS'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p>Mercedes-Benz unveiled the EQS all-electric sedan last month.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ['Skoda Kodiaq Petrol BS6'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p>Skoda Auto India will be launching the petrol powered Kodiaq in the country later this year.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;