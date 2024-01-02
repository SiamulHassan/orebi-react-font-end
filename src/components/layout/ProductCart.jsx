// import React from 'react'
import { LuRefreshCw } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Image from "./Image";
import Container from "./Container";
import ProductBadge from "./ProductBadge";

const ProductCart = ({ productData }) => {
  return (
    <div className={`group cursor-pointer`}>
      <div className="img-part relative">
        <Image
          imageSrc={productData.image}
          alt="product"
          className="h-full w-full object-cover"
        />
        <div className="hover-wishlist absolute bottom-0 left-0 w-full origin-bottom scale-0 bg-white py-5 pr-7 pt-8 text-base text-secondary transition-all duration-300 group-hover:scale-100">
          <div className="wishlist mb-3 flex items-center justify-end gap-4 transition-all duration-150 hover:font-bold lg:mb-5">
            <span>Add to Wish List</span>
            <IoMdHeart />
          </div>
          <div className="compare mb-3 flex items-center justify-end gap-4 transition-all duration-150 hover:font-bold lg:mb-5">
            <span>Compare</span>
            <LuRefreshCw />
          </div>
          <div className="addToCart mb-3 flex items-center justify-end gap-4 text-secondary transition-all duration-150 hover:font-bold lg:mb-5">
            <span>Add to Cart</span>
            <FaCartShopping />
          </div>
        </div>
        <ProductBadge batchTitle={productData.batchTitle} />
      </div>
      <div className="price-part bg-primary p-4">
        <div className="price flex items-center justify-between">
          <h3 className="text-sm font-bold text-colorBlack lg:text-xl">
            {productData.productTitle}
          </h3>
          <span className="text-base text-secondary">$44.00</span>
        </div>
        <p className="mt-4 text-base text-secondary">
          {productData.productColor}
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
