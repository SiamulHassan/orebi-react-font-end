import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import logo from "../../assets/images/logo.png";

import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [show, setShow] = useState(true);

  // how and hide menu lists according to vw
  useEffect(() => {
    const menuBreakpoint = () => {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    menuBreakpoint();
    window.addEventListener("resize", menuBreakpoint);
  }, []);
  return (
    <nav className="py-4 lg:py-6">
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="w-1/4">
            <Image imageSrc={logo} />
          </div>
          <div className=" w-full lg:w-3/4">
            <FaBarsStaggered
              className="absolute right-2.5 top-8 ml-auto cursor-pointer lg:hidden"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="text mt-5 font-dm text-sm lg:mt-0 lg:flex lg:justify-end lg:gap-10">
                <ListItem
                  itemName="Home"
                  className="my-2.5 transition-all duration-200 hover:font-bold lg:my-0"
                />
                <ListItem
                  itemName="Shop"
                  href="/products"
                  className="my-2.5 transition-all duration-200 hover:font-bold lg:my-0"
                />
                <ListItem
                  itemName="About"
                  href="/about"
                  className="my-2.5 transition-all duration-200 hover:font-bold lg:my-0"
                />
                <ListItem
                  itemName="Contacts"
                  href="/contacts"
                  className="my-2.5 transition-all duration-200 hover:font-bold lg:my-0"
                />
                <ListItem
                  itemName="Journal"
                  className="my-2.5 transition-all duration-200 hover:font-bold lg:my-0"
                />
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
