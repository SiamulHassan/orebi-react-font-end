import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
const BreadCrumb = () => {
  const breadCrumbPath = window.location.pathname;
  return (
    <>
      <div className="flex items-center gap-2">
        <Link to="/">Home</Link>
        <SlArrowRight className="text-sm" />
        <span>{breadCrumbPath.split("/")[1]}</span>
      </div>
    </>
  );
};

export default BreadCrumb;
