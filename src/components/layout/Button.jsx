/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";

const Button = ({ children, className, bg, type }) => {
  return (
    <>
      {bg ? (
        <button
          type={type}
          className={`${bg} border border-solid border-colorBlack px-12 py-3 text-sm font-bold text-colorBlack ${className}`}
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          className={`border border-solid border-transparent bg-[#262626] px-12 py-3 text-sm font-bold text-white hover:bg-[#313131] ${className} transition-all duration-200`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
