import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Treatment = () => {
  return (
    <div className="container">
      <div className="card card-side bg-base-100 shadow-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <figure>
        <img src={treatment} alt="treatment" />
      </figure>
      <div className="card-body px-12">
        <h2 className="card-title text-5xl font-bold">Ecceptional Dental Care, on Your Term</h2>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page.
        </p>
        <PrimaryBtn></PrimaryBtn>
      </div>
    </div>
    </div>
  );
};

export default Treatment;
