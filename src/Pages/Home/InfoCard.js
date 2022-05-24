import React from "react";

const InfoCard = ({img}) => {
  return (
    <div className="card lg:card-side shadow-xl">
      <figure className="pl-5">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
