import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-[19px] bg-base-200 p-4 ">
      <p className="bg-secondary text-base-100 px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60} >
        <p className="text-primary font-semibold text-[18px] leading-[30px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          doloremque, ducimus, eveniet deleniti velit, asperiores quos sequi
          doloribus voluptate delectus 
        </p>
        <p className="text-primary font-semibold text-[18px] leading-[30px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          doloremque, ducimus, eveniet deleniti velit, asperiores quos sequi
          doloribus voluptate delectus 
        </p>
        <p className="text-primary font-semibold text-[18px] leading-[30px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          doloremque, ducimus, eveniet deleniti velit, asperiores quos sequi
          doloribus voluptate delectus 
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
