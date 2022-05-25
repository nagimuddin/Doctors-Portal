import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBennar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div style={{ background: `url(${bg})` }} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="ml-7">Your picked date: {format(date, 'PP')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBennar;
