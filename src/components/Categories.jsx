import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-semibold text-[#444444] text-xl leading-[30px] ">
        All Categories ({categories.length})
      </h2>
      <div className="flex flex-col justify-center items-start space-y-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "bg-base-100 border-0 hover:bg-base-200 px-[50px] py-[17px] font-medium text-accent"
            }
                to={`/category/${category.id}`}
          >
            {" "}
            {category.name}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
