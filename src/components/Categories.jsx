import { use } from "react";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-semibold text-[#444444] text-xl leading-[30px] ">
        All Categories ({categories.length})
      </h2>
    </div>
  );
};

export default Categories;
