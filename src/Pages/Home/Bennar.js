import React from "react";
import chair from '../../assets/images/chair.png';

const Bennar = () => {
  return (
    <div style={{backgroundImage: `url("https://buthydro.sirv.com/bg.png")`}} className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img  className="max-w-sm rounded-lg shadow-2xl" src={chair} alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your Smile Start Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
