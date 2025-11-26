import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, image_url, title, details } = news;
  return (
    <div className="card bg-base-100 shadow-sm space-y-5">
      <figure className="px-10 pt-10">
        <img
          src={image_url}
          alt={title}
          className=" w-full h-auto rounded-xl object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[primary] text-[25px] font-bold leading-[45px] ">
          {title}
        </h2>
        <p className="text-accent leading-[26px] ">{details}</p>
        <div className="card-actions mt-8">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-secondary text-white"
          >
            <FaArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
