import React from "react";
// import Dummy from "../../components/layout/Dummy";
import BreadCrumb from "../../components/layout/BreadCrumb";
import Container from "../../components/layout/Container";
import ProductLayout from "../../components/layout/ProductLayout";
const Shop = () => {
  return (
    <div>
      <Container>
        <BreadCrumb pageTitle="Products" />
        <ProductLayout />
      </Container>
    </div>
  );
};

export default Shop;
