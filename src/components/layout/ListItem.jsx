// import React from 'react'

const ListItem = ({ itemName, className }) => {
  return (
    <li className={className}>
      <a href="#" className="group-hover:font-bold">
        {itemName}
      </a>
    </li>
  );
};

export default ListItem;
