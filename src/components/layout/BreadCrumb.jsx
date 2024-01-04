import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
const BreadCrumb = ({ pageTitle }) => {
  const breadCrumbPath = window.location.pathname;
  return (
    <div className=" mb-16 mt-24 lg:my-24">
      <h2 className="mb-4 font-dm text-4xl font-bold text-colorBlack">
        {pageTitle}
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
