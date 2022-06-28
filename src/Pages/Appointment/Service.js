import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 font-bold">
              No Slot Abailable <br />
              Try Another Day
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "speces" : "spece"} Abailable
        </p>
        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-success"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
