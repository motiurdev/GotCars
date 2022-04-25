import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import TopBar from '../Shared/TopBar/TopBar';
import Contact from './Contact';

const ContactHome = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <Contact></Contact>
        </div>
    );
};

export default ContactHome;