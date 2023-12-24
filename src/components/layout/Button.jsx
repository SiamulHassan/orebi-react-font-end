// import React from 'react'

import { Link } from "react-router-dom";

const Button = ({ children, className }) => {
  return (
    <Link to="#" className={className}>
      {children}
    </Link>
  );
};

export default Button;
