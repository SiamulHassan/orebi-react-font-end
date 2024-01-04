import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
const ProductCategory = ({ categoryName, data, cateDropdown }) => {
  const [showCat, setShowCat] = useState(true);
  const [subCatStates, setSubCatStates] = useState(
    Array(data.length).fill(false),
  );

  const handleShoCat = () => {
    cateDropdown && setShowCat((prev) => !prev);
  };
  const handleShowSubCat = (i) => {
    const newSub = [...subCatStates];
    newSub[i] = !newSub[i];
    setSubCatStates(newSub);
  };
  return (
    <div>
      {cateDropdown ? (
        <div
          onClick={handleShoCat}
          className="mt-10 flex cursor-pointer items-center justify-between gap-4"
        >
          <h2 className="font-dm text-base font-bold text-colorBlack lg:text-xl">
            {categoryName}
          </h2>
          {showCat ? (
            <MdKeyboardArrowDown className="text-xl" />
          ) : (
            <MdKeyboardArrowUp className="text-xl" />
          )}
        </div>
      ) : (
        <h2
          onClick={handleShoCat}
          className="mt-10 cursor-pointer font-dm text-base font-bold text-colorBlack lg:text-xl"
        >
          {categoryName}
        </h2>
      )}

      <div>
        {showCat &&
          data.map((productData, i) => (
            <ul key={i}>
              <li className="border-b border-solid py-5 text-base text-secondary">
                {productData.color ? (
                  <div className="flex items-center">
                    <span
                      className={`mr-4 inline-block h-3 w-3 rounded-full`}
                      style={{ background: productData.color }}
                    ></span>
                    {productData.categoryTitle}
                  </div>
                ) : productData.dropDownIcon ? (
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => handleShowSubCat(i)}
                  >
                    {productData.categoryTitle}
                    {subCatStates[i] ? (
                      <AiOutlineMinus />
                    ) : (
                      <FaPlus className="mt-1 text-xs" />
                    )}
                  </div>
                ) : (
                  productData.categoryTitle
                )}

                {subCatStates[i] && productData.subCategory && (
                  <ul className="mt-4">
                    {productData.subCategory.map((subCat, i) => (
                      <li key={i} className="cursor-pointer py-3 text-sm">
                        {subCat.categoryTitle}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default ProductCategory;
