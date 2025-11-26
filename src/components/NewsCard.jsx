import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    image_url,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 ">
      {/* TOP SECTION */}
      <div className="flex justify-between items-center bg-base-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{author?.name}</h4>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="p-4">
        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4 leading-snug">{title}</h2>

        {/* IMAGE */}
        <figure className="px-4 py-2">
          <img
            src={image_url || thumbnail_url}
            alt={title}
            className="rounded-lg w-full h-64 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
        </figure>

        {/* DETAILS */}
        <p className="text-gray-700 mt-4">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news-details/${id}`} className="text-[#FF8C47] font-semibold cursor-pointer">
                {" "}
                Read More
              </Link>
            </>
          ) : (
            { details }
          )}
        </p>

        {/* FOOTER */}
        <hr className="my-4 text-base-300" />

        <div className="flex justify-between items-center">
          {/* RATING */}
          <div className="flex items-center text-orange-500 gap-1">
            {[...Array(rating.number)].map((_, index) => (
              <FaStar key={index} />
            ))}
            <span className="text-gray-800 ml-2 font-semibold">
              {rating.number}
            </span>
          </div>

          {/* VIEWS */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
