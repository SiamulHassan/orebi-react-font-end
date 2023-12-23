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
    <nav>
      <Container>
        <Flex className="lg:flex lg:justify-between lg:items-center">
          <div className="w-1/4">
            <Image imageSrc={logo} />
          </div>
          <div className=" w-full lg:w-3/4">
            <FaBarsStaggered
              className="absolute top-2.5 right-2.5 ml-auto lg:hidden cursor-pointer"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="mt-5 lg:mt-0 lg:flex lg:justify-end font-dm text-sm text lg:gap-10">
                <ListItem itemName="Home" className="group my-2.5 lg:my-0" />
                <ListItem itemName="Shop" className="group my-2.5 lg:my-0" />
                <ListItem itemName="About" className="group my-2.5 lg:my-0" />
                <ListItem
                  itemName="Contacts"
                  className="group my-2.5 lg:my-0"
                />
                <ListItem itemName="Journal" className="group my-2.5 lg:my-0" />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
