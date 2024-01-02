// import React from 'react'

import { Link } from "react-router-dom";

const Button = ({ children, className }) => {
  return (
    <Link
      to="#"
      className={`bg-[#262626] px-8 py-2 text-sm font-bold text-white ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
