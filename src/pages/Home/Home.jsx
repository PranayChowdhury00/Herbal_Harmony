import React from 'react';
import Banner from './FirstSection/Banner';
import Advise from './Adbise/Advise';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advise></Advise>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <Services></Services>
        </div>
    );
};

export default Home;