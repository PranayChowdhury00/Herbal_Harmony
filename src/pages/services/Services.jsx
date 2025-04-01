import React from 'react';
import Banner from './Banner/Banner';
import FirstSection from './FirstSection/FirstSection';
import ServiceSection from './ServiceSection/ServiceSection';
import GuaranteedResults from './GuaranteedResults/GuaranteedResults';
import LastSection from './LastSection/LastSection';

const Services = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <ServiceSection></ServiceSection>
            <GuaranteedResults></GuaranteedResults>
            <LastSection></LastSection>
        </div>
    );
};

export default Services;