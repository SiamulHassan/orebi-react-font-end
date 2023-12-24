// import React from 'react'

import { Link } from "react-router-dom";

const ListItem = ({ itemName, className, href }) => {
  return (
    <li className={className}>
      <Link to={href} className="group-hover:font-bold">
        {itemName}
      </Link>
    </li>
  );
};

export default ListItem;
