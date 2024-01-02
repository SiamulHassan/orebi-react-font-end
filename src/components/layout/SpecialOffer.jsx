import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import FeaturedProduct from "./FeaturedProduct";
import newCollectionData from "../../../data/newCOllectionData";
const productData = newCollectionData.slice(-4);
const SpecialOffer = () => {
  return (
    <>
      <Container>
        <Heading title="Special Offers" />
        <FeaturedProduct productData={productData} />
      </Container>
    </>
  );
};

export default SpecialOffer;
