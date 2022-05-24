import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import markar from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard className="bg-accent" img={clock}></InfoCard>
            <InfoCard className="bg-accent" img={markar}></InfoCard>
            <InfoCard className="bg-accent" img={phone}></InfoCard>
        </div>
    );
};

export default Info;