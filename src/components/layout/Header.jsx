// import React from 'react'

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
const Header = () => {
  const dropDownRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (dropDownRef.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
      <div className="bg-primary py-4">
        <Container>
          <Flex className="flex items-center justify-between gap-5">
            <div>
              <Dropdown
                className="relative cursor-pointer"
                dropDownRef={dropDownRef}
              >
                <div className="flex items-center gap-2">
                  <HiOutlineBars2 />
                  <span>Shop by Category</span>
                </div>
                {show && (
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
            <div className="relative w-[600px]">
              <Search
                className="w-full px-5 py-4"
                placeholder="Search Products"
              />
              <IoIosSearch className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2" />
            </div>
            <p>3</p>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
