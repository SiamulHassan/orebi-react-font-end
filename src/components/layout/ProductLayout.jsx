import React, { useState } from "react";
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
  const [showNum, setShowNum] = useState(null);
  // const [showNum, setShowNum] = useState(null);
  console.log(typeof showNum, showNum);
  return (
    <div>
      <Flex className={"flex justify-center gap-9"}>
        <div className="category w-[20%]">
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
        <div className="product grid w-[80%] grid-cols-3 items-start gap-6">
          <div className="col-span-3 flex items-center justify-end gap-8">
            <SelectBox
              label="Sort By"
              options={sortOptions}
              // setShowNum={setShowNum}
            />
            <SelectBox
              label="Show"
              options={pageShowOptions}
              setShowNum={setShowNum}
            />
          </div>
          <PaginatedItems itemsPerPage={12} showNum={+showNum} />
        </div>
      </Flex>
    </div>
  );
};

export default ProductLayout;
