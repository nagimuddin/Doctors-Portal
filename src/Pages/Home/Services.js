import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const Services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
    },
    {
      id: 2,
      name: "Fluoride Treatment",
      img: cavity,
    },
    {
      id: 3,
      name: "Fluoride Treatment",
      img: whitening,
    },
  ];
  return (
    <div className="container mx-auto my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl text-slate-600">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
