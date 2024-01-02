import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const SimpleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} cursor-pointer`} onClick={onClick}>
      <div className="absolute right-3 top-[31%] z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#c7c7c7] text-white lg:h-16 lg:w-16">
        <FaArrowRightLong className="text-lg lg:text-2xl" />
      </div>
    </div>
  );
};

export default SimpleNextArrow;
