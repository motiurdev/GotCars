import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBar from '../../Shared/TopBar/TopBar';
import AllFeatureCars from '../AllFeatureCars/AllFeatureCars';

const AllFeature = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <AllFeatureCars></AllFeatureCars>
        </div>
    );
};

export default AllFeature;