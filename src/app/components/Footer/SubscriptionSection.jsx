import React from "react";

const SubscriptionSection = () => {
  return (
    <div className="col-lg-4 my-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control shadow-none btn-color text-white"
          placeholder="Enter Your Email"
          aria-label="Email"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-light primary-color"
          type="button"
          id="button-addon2"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
