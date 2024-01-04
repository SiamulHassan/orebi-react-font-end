import React from "react";
import BreadCrumb from "../../components/layout/BreadCrumb";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Image from "../../components/layout/Image";
import { Link } from "react-router-dom";
import productFeatureData from "../../../data/productFeatureData";
import aboutProductImg1 from "../../assets/images/about-product-1.png";
import aboutProductImg2 from "../../assets/images/about-product-2.png";
import ProductFeature from "../../components/layout/ProductFeature";
const About = () => {
  return (
    <>
      <Container>
        <BreadCrumb />
        <Flex className={"gap-10"}>
          <div className="w-1/2">
            <Link to="#">
              <Image imageSrc={aboutProductImg1} />
            </Link>
          </div>
          <div className="w-1/2">
            <Link to="#">
              <Image imageSrc={aboutProductImg2} />
            </Link>
          </div>
        </Flex>
        <p className="my-20 max-w-[1400px] font-dm text-xl leading-8 lg:my-28 lg:text-3xl lg:leading-10">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>

        <div className={"gap-10 md:flex"}>
          {productFeatureData &&
            productFeatureData.map((productData, i) => (
              <ProductFeature
                key={i}
                data={productData}
                width="w-full mt-5 text-center md:w-1/3"
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default About;
