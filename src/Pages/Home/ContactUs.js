import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className=" py-12">
      <div className="text-center">
        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
        <h2 className="text-3xl">Stay Connected With Us</h2>
      </div>
      <div className="max-w-md mx-auto my-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-sm w-full mt-5 bg-white"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-md w-full mt-5 bg-white"
        />
        <textarea
          placeholder="Your Message"
          className="input input-bordered input-lg w-full mt-5 bg-white"
        ></textarea>
        <div className="text-center">
          <button className="btn btn-success my-3 px-12">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
