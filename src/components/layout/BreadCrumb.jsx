import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
const BreadCrumb = () => {
  const breadCrumbPath = window.location.pathname;
  // const firstCharacter = breadCrumbPath.split("/")[1].charAt(0).toUpperCase();
  // const restCharacters = breadCrumbPath.split("/")[1].slice(1);
  const title = breadCrumbPath.split("/")[1].split("");
  const capitalisedTitle = title.at(0).toUpperCase() + title.slice(1).join("");
  return (
    <div className=" mb-16 mt-24 lg:my-24">
      <h2 className="mb-4 font-dm text-4xl font-bold text-colorBlack">
        {capitalisedTitle}
      </h2>
      <div className="flex items-center gap-2">
        <Link to="/">Home</Link>
        <SlArrowRight className="text-sm" />
        <span>{breadCrumbPath.split("/")[1]}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
