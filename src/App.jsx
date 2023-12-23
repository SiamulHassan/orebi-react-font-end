import Flex from "./components/layout/Flex";
import Image from "./components/layout/Image";
import logo from "./assets/images/logo.png";
import List from "./components/layout/List";
import ListItem from "./components/layout/ListItem";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";
function App() {
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
    <>
      <nav>
        <div className="max-w-container mx-auto p-2.5">
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
                  <ListItem
                    itemName="Journal"
                    className="group my-2.5 lg:my-0"
                  />
                </List>
              )}
            </div>
          </Flex>
        </div>
      </nav>
    </>
  );
}

export default App;
