import React from 'react';
import Footer from '../Shared/Footer';
import { useState } from 'react';
import AppointmentBennar from './AppointmentBennar';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBennar date={date} setDate={setDate}></AppointmentBennar>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;