// import React from 'react'

import ProductCart from "./ProductCart";

const FeaturedProduct = ({ productData }) => {
  return (
    <div className="mb-0 grid justify-between gap-6 sm:grid-cols-2 sm:p-0 md:grid-cols-4 lg:mb-24 lg:gap-8">
      {productData.map((products, i) => (
        <ProductCart key={i} productData={products} />
      ))}
    </div>
  );
};

export default FeaturedProduct;
