import React from 'react';
import Banner from './FirstSection/Banner';
import Advise from './Adbise/Advise';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import Services from './Service/Services';
import FifthSection from './FifthSection/FifthSection';
import SixthSection from '../SixthSection/SixthSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advise></Advise>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <Services></Services>
            <FifthSection></FifthSection>
            <SixthSection></SixthSection>
        </div>
    );
};

export default Home;