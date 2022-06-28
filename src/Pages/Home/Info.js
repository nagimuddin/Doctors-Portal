import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import markar from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgclassName="bg-gradient-to-r from-success to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgclassName="bg-accent" img={markar}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgclassName="bg-gradient-to-r from-success to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;