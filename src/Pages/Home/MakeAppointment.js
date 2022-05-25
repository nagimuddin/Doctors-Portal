import React from "react";
import doctorsmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex flex-col md:flex-row justify-center items-center my-24 text-white"
    >
      <div className="flex-1">
        <img className="mt-[-100px]" src={doctorsmall} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl my-5">Make An Appointment Today</h2>
        <p className="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn></PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
