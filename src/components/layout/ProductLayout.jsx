import React, { useEffect, useRef, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Flex from "./Flex";
import PaginatedItems from "./PaginationItems";
import ProductCategory from "./ProductCategory";
import {
  shopByCategory,
  shopByColor,
  shopByBrand,
  shopByPrice,
} from "../../../data/productCategory";
import SelectBox from "./SelectBox";
const sortOptions = [
  { label: "Fashon", selected: true },
  { value: "Mens Collection", label: "Mens Collection" },
  { value: "Womens Collection", label: "Womens Collection" },
  { value: "Young Age", label: "Young Age" },
];
const pageShowOptions = [
  { label: "12", value: "12", selected: true },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
];
const ProductLayout = () => {
  const productCateRef = useRef(null);
  const productFilterRef = useRef(null);
  const [sortAndPageShow, setSortAndPageShow] = useState(null);
  const [showCateMenu, setShowCateMenu] = useState(true);
  // const [showSortBy, setShowSortBy] = useState(null);
  // console.log(typeof showNum, showNum);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768 ? setShowCateMenu(false) : setShowCateMenu(true);
    };
    const handleProductCateRef = (e) => {
      if (window.innerWidth < 768) {
        productCateRef.current.contains(e.target) ||
        productFilterRef.current.contains(e.target)
          ? setShowCateMenu(true)
          : setShowCateMenu(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    document.body.addEventListener("click", handleProductCateRef);
  }, []);

  return (
    <div>
      <Flex className={"relative justify-center gap-9"}>
        <div
          ref={productCateRef}
          className="absolute left-0 top-9 w-3/5 md:static md:w-[25%]"
        >
          {showCateMenu && (
            <div className="category absolute left-0 top-0 z-50 w-full bg-slate-50 p-4 md:static md:bg-transparent md:p-0">
              <IoClose
                className="ml-auto cursor-pointer text-xl md:hidden"
                onClick={() => setShowCateMenu(!showCateMenu)}
              />
              <ProductCategory
                categoryName="Shop By Category"
                data={shopByCategory}
              />
              <ProductCategory
                cateDropdown={true}
                categoryName="Shop By Color"
                data={shopByColor}
              />
              <ProductCategory
                cateDropdown={true}
                categoryName="Shop By Brand"
                data={shopByBrand}
              />
              <ProductCategory
                cateDropdown={false}
                categoryName="Shop By Price"
                data={shopByPrice}
              />
            </div>
          )}
        </div>
        <div className="product mt-10 grid w-[92%] grid-cols-1 items-start gap-6 sm:grid-cols-2 md:w-[75%] lg:grid-cols-3">
          <Flex className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:gap-8 lg:col-span-3 lg:justify-end">
            <div
              className="cursor-pointer text-2xl sm:w-[20%] sm:text-3xl md:hidden"
              ref={productFilterRef}
            >
              <BsFilter onClick={() => setShowCateMenu(!showCateMenu)} />
            </div>

            <SelectBox
              label="Sort By"
              id="sortby"
              options={sortOptions}
              setSortAndPageShow={setSortAndPageShow}
            />
            <SelectBox
              label="Show"
              id="showproduct"
              options={pageShowOptions}
              setSortAndPageShow={setSortAndPageShow}
            />
          </Flex>
          <PaginatedItems
            itemsPerPage={12}
            sortAndPageShow={+sortAndPageShow}
          />
        </div>
      </Flex>
    </div>
  );
};

export default ProductLayout;
