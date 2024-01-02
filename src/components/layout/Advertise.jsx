// import React from 'react'

import Container from "./Container";
import Image from "./Image";
import lampLightImg from "../../assets/images/lamp-light.png";
import whiteLampImg from "../../assets/images/white-lamp.png";
import watchImg from "../../assets/images/watch.png";
import { Link } from "react-router-dom";
const Advertise = () => {
  return (
    <div className="mt-3 lg:mt-36">
      <Container>
        <div className="grid-cols-[repeat(auto-fit, minmax(25rem,1fr))] grid grid-rows-[min-content] gap-8 md:grid-cols-[repeat(2,minmax(21rem,1fr))] md:grid-rows-[repeat(2,18vw)] lg:gap-10 lg:p-8">
          <Link to="#" className="row-span-2">
            <Image
              className="h-full w-full object-cover"
              imageSrc={lampLightImg}
              alt="lamp image"
            />
          </Link>
          <Link to="#">
            <Image
              className="h-full w-full object-cover"
              imageSrc={watchImg}
              alt="clock"
            />
          </Link>
          <Link to="#">
            <Image
              className="h-full w-full object-cover"
              imageSrc={whiteLampImg}
              alt="white lamp"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Advertise;
