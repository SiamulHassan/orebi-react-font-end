// import React from 'react'
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import footerLogo from "../../assets/images/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// footer should be used in every page . so structure should also have to change
const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="relative gap-6 md:static md:flex lg:gap-0">
          <div className="inline-block w-[50%] sm:w-[23%] md:w-[15%]">
            {/* same heading desing but component niye kore nai */}
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              {/* listItem er dsing same so map korle akbar likhle e hoto */}
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="inline-block w-[50%] sm:w-[23%] md:w-[15%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="mt-8 inline-block w-[50%] sm:mt-0 sm:w-[23%] md:w-[15%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="inline-block w-[50%] -translate-y-14 justify-center sm:w-[23%] md:flex md:w-[30%] md:translate-y-0">
            <div>
              <h4 className="mb-4 font-dm text-sm font-bold lg:text-base">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="absolute -top-11 w-[25%] md:static md:top-0">
            <Image imageSrc={footerLogo} alt="footer logo" />
          </div>
        </Flex>
        <Flex className={"mt-16 flex"}>
          <div className="flex w-[50%] items-center gap-4 md:w-[75%]">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <p className="w-[50%] text-sm leading-6 text-[#6d6d6d] md:w-[25%]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
