// import React from 'react'
import Slider from "react-slick";
import sliderImg from "../../assets/images/slider-1.svg";
import Image from "./Image";
import { useState } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      // before change give the next slide index number. only next or prev diye e kaj hoye jabe both lagbe na. samner dike slide korle next = 0,1,2 ...back e korle next = 3,2,1. Orthat change hobar age ami je slide e jabo tar index ta dibe.
      setCurrentSliderIndex(next);
    },
    appendDots: (dots) => (
      <div
        // background color
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: "50%",
          left: "30px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      // jotogula slider totogulo dots create korbe appendDots. sei Dots gulor index customPaging er (i). so , activeSlideIndex er shathe === je dot num match korbe ---> seta active dot. ar sei dot ke amra style dicchi.
      i === currentSliderIndex ? (
        <div
          style={{
            width: "30px",
            height: "50px",
            color: "black",
            borderRight: "3px black solid",
          }}
        >
          0{i + 1}
        </div>
      ) : (
        <div
          style={{
            width: "30px",
            height: "50px",
            color: "transparent",
            borderRight: "3px white solid",
          }}
        >
          0{i + 1}
        </div>
      ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              // background color
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: "50%",
                left: "8px",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) =>
            i === currentSliderIndex ? (
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  color: "black",
                  fontSize: "12px",
                  borderRight: "3px black solid",
                }}
              >
                0{i + 1}
              </div>
            ) : (
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  color: "transparent",
                  fontSize: "12px",
                  borderRight: "3px white solid",
                }}
              >
                0{i + 1}
              </div>
            ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to={"#"}>
        <Image
          className="h-[35vw] w-full object-cover lg:h-full"
          imageSrc={sliderImg}
        />
      </Link>
      <Link to={"#"}>
        <Image
          className="h-[35vw] w-full object-cover lg:h-full"
          imageSrc={sliderImg}
        />
      </Link>
      <Link to={"#"}>
        <Image
          className="h-[35vw] w-full object-cover lg:h-full"
          imageSrc={sliderImg}
        />
      </Link>
    </Slider>
  );
};

export default Banner;
