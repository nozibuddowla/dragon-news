import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold leading-[30px] text-primary">
        Find Us On
      </h3>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item p-4">
          {" "}
          <FaFacebook /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item p-4">
          <FaInstagram /> Instagram
        </button>
        <button className="btn bg-base-100 justify-start join-item p-4">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
