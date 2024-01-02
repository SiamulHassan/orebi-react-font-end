// import React from 'react'

import Slider from "react-slick";
import ProductCart from "./ProductCart";
import newCollectionData from "../../../data/newCOllectionData";
import Container from "./Container";
import SimplePrevArrow from "./SimplePrevArrow";
import SimpleNextArrow from "./SimpleNextArrow";
import Heading from "./Heading";
import FeaturedProduct from "./FeaturedProduct";
import AdvertiseMiddle from "./AdvertiseMiddle";

const featuredProduct = newCollectionData?.slice(4, 8);

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Heading title="New Arrivals" />
        <Slider {...settings}>
          {newCollectionData?.map((productData, i) => (
            <div key={i}>
              <div className="mx-auto mb-32 max-w-[94%] lg:mb-48">
                <ProductCart key={i} productData={productData} />
              </div>
            </div>
          ))}
        </Slider>
        <FeaturedProduct productData={featuredProduct} />
        <AdvertiseMiddle />
      </Container>
    </>
  );
};

export default NewArrival;
