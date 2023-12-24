// import React from 'react'

const Dropdown = ({ children, className, dropDownRef }) => {
  return (
    <div className={className} ref={dropDownRef}>
      {children}
    </div>
  );
};

export default Dropdown;
