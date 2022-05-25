import React from "react";
import chair from '../../assets/images/chair.png';
import PrimaryBtn from "../Shared/PrimaryBtn";

const Bennar = () => {
  return (
    <div style={{backgroundImage: `url("https://buthydro.sirv.com/bg.png")`}} className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img  className="max-w-md rounded-lg shadow-2xl" src={chair} alt="" />
        <div className="py-5 px-12 items-center">
          <h1 className="text-5xl font-bold">Your Smile Start Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
