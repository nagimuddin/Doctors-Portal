import React from 'react';
import Bennar from './Bennar';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;