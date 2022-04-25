import React from 'react';
import Navigation from '../../pages/Shared/Navigation/Navigation'
import TopBar from '../Shared/TopBar/TopBar';
import About from './About';

const AboutHome = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <About></About>
        </div>
    );
};

export default AboutHome;