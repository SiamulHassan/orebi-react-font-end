// import React from "react";
import Image from "./Image";
import Button from "./Button";
import clockImg from "../../assets/images/clock.png";
import { Link } from "react-router-dom";
import Flex from "./Flex";
const AdvertiseMiddle = () => {
  return (
    <div className="mt-[10rem] block bg-[#f3f3f3] md:flex">
      <div className="w-full md:w-[40%]">
        <Link to="#">
          <Image
            imageSrc={clockImg}
            alt="clock"
            className="d-block h-full w-full object-cover"
          />
        </Link>
      </div>
      <Flex className="flex w-full flex-col items-center justify-center md:w-[60%] md:items-start">
        <h3 className="text-4xl font-semibold lg:text-5xl">
          Phone of the year
        </h3>
        <p className="mb-12 mt-6 max-w-[28rem] text-center text-sm leading-6 md:text-left lg:text-lg lg:leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry orem Ipsum..
        </p>
        <Button className={`mb-6 md:mb-0`}>
          <Link to="/products">Shop Now</Link>
        </Button>
      </Flex>
    </div>
  );
};

export default AdvertiseMiddle;
