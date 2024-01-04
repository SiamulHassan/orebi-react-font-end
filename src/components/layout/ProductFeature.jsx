import React from "react";

const ProductFeature = ({ data, width }) => {
  return (
    <div className={width}>
      <h2 className="font-dm text-xl font-bold leading-9 text-colorBlack lg:text-2xl">
        {data.title}
      </h2>
      <p className=" mt-3 w-full px-3 font-dm text-sm leading-6 text-secondary md:max-w-[506px] md:px-0 lg:text-base">
        {data.description}
      </p>
    </div>
  );
};

export default ProductFeature;
