// import React from 'react'
import Flex from "./Flex";
import { MdLocalShipping, MdRefresh } from "react-icons/md";
const AdditionalInfo = () => {
  return (
    <>
      <div className="policy-container mt-4 border border-[#f0f0f0] py-3 lg:py-5">
        <Flex className="flex p-2 lg:p-0">
          <div className="warrenty flex w-1/3 items-center justify-center gap-2 lg:gap-4">
            <span className="text-2xl font-bold lg:text-[2rem]">2</span>
            <span className="text-xs text-[#6d6d6d] lg:text-lg">
              Two years warrenty
            </span>
          </div>
          <div className="shipping flex w-1/3 items-center justify-center gap-2 lg:gap-4">
            <MdLocalShipping className="h-[20px] w-[20px]" />
            <span className="text-xs text-[#6d6d6d] lg:text-lg">
              Free shipping
            </span>
          </div>
          <div className="return flex w-1/3 items-center justify-center gap-2 lg:gap-4">
            <MdRefresh className="h-[20px] w-[20px]" />
            <span className="text-xs text-[#6d6d6d] lg:text-lg">
              Return policy in 30 days
            </span>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default AdditionalInfo;
