// import React from 'react'

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { CgMenuRightAlt } from "react-icons/cg";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";
// images
import chartImg from "../../assets/images/product-11.png";
import Button from "./Button";
const Header = () => {
  const categoryDropdownRef = useRef(null);
  const userRef = useRef(null);
  const cartRef = useRef(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showChartDropdown, setShowChartDropdown] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // category ref
      categoryDropdownRef.current.contains(e.target)
        ? setShowCategoryDropdown(true)
        : setShowCategoryDropdown(false);

      // user ref
      userRef.current.contains(e.target)
        ? setShowUserDropdown(true)
        : setShowUserDropdown(false);

      // cart ref
      cartRef.current.contains(e.target)
        ? setShowChartDropdown(true)
        : setShowChartDropdown(false);
    });
  }, []);
  return (
    <>
      <div className="bg-primary py-2 lg:py-4">
        <Container>
          <Flex className="flex items-center justify-between gap-5">
            <div>
              <Dropdown
                className="relative z-50 cursor-pointer"
                dropDownRef={categoryDropdownRef}
              >
                <div className="flex items-center gap-2">
                  <CgMenuRightAlt className="text-2xl lg:text-xl" />
                  <span className="hidden lg:inline-block">
                    Shop by Category
                  </span>
                </div>
                {showCategoryDropdown && (
                  <List className="absolute left-0 top-9 w-[243px] rounded bg-[#262626] font-dm text-sm text-[#a7a7a7]">
                    <ListItem
                      className="border-b border-solid border-[#a7a7a7] py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Accesories"
                    />
                    <ListItem
                      className="border-b border-solid border-[#a7a7a7] py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Furniture"
                    />
                    <ListItem
                      className="border-b border-solid border-[#a7a7a7] py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Electronics"
                    />
                    <ListItem
                      className="border-b border-solid border-[#a7a7a7] py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Clothes"
                    />
                    <ListItem
                      className="border-b border-solid border-[#a7a7a7] py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Bags"
                    />
                    <ListItem
                      className="py-4 pl-5 transition-all duration-300 hover:pl-7 hover:text-white"
                      itemName="Home appliances"
                    />
                  </List>
                )}
              </Dropdown>
            </div>
            <div className="relative w-auto lg:w-[600px]">
              <Search
                className="w-full py-2 pl-3 pr-8 focus:outline-none lg:py-4 lg:pl-5 lg:pr-12 lg:focus:outline-black"
                placeholder="Search Products"
              />
              <IoIosSearch className="h:5 absolute right-2 top-1/2 w-5 -translate-y-1/2 lg:right-4 lg:h-6 lg:w-6" />
            </div>
            <div className="flex gap-2 lg:gap-6">
              <Dropdown
                className="relative z-50 font-dm text-sm font-bold"
                dropDownRef={userRef}
              >
                <Flex className="flex cursor-pointer items-center gap-1">
                  <FaUser />
                  <GoTriangleDown />
                </Flex>
                {showUserDropdown && (
                  <List className="absolute right-0 top-8 w-52 overflow-hidden rounded bg-white text-center shadow-sm">
                    <ListItem
                      className="border-b border-solid py-4 transition-all duration-200 hover:bg-black hover:text-white"
                      itemName="My Account"
                      href="#"
                    />
                    <ListItem
                      className="py-4 transition-all duration-200 hover:bg-black hover:text-white"
                      itemName="Logout"
                    />
                  </List>
                )}
              </Dropdown>

              <Dropdown className="relative z-50" dropDownRef={cartRef}>
                <FaCartShopping className="cursor-pointer text-lg" />
                {showChartDropdown && (
                  <div className="absolute right-0 top-8 w-[360px] rounded-lg bg-white shadow-[0_12px_60px_-15px_rgba(0,0,0,0.3)]">
                    <Flex className="flex items-center gap-4 bg-primary p-5">
                      <div className="h-[80px] w-[80px]">
                        <Image
                          className="h-full w-full object-cover"
                          imageSrc={chartImg}
                        />
                      </div>
                      <div className="flex grow items-center justify-between text-sm font-bold">
                        <div className="content">
                          <h3>Black Smart Watch</h3>
                          <p className="mt-2">$44.00</p>
                        </div>
                        <LiaTimesSolid className="text-xl" />
                      </div>
                    </Flex>
                    <div className="bg-white px-5 pb-5 pt-4">
                      <p className="pb-3 text-base text-[#767676]">
                        Subtotal:
                        <span className="font-bold text-black"> $44.00</span>
                      </p>
                      <div className="flex gap-5 font-bold">
                        <Button className="border border-solid border-black px-8 py-4">
                          View Cart
                        </Button>
                        <Button className="bg-black px-8 py-4 text-white">
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Dropdown>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
