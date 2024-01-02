// import React from "react";

const ProductBadge = ({ batchTitle }) => {
  return (
    <div className="batch absolute left-[2rem] top-[2rem] bg-[#262626] px-8 py-2 text-sm font-bold text-white">
      {batchTitle}
    </div>
  );
};

export default ProductBadge;
