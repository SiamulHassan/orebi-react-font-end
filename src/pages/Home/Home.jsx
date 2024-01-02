// import React from 'react'

import AdditionalInfo from "../../components/layout/AdditionalInfo";
import Advertise from "../../components/layout/Advertise";
import Banner from "../../components/layout/Banner";
import NewArrival from "../../components/layout/NewArrival";
import SpecialOffer from "../../components/layout/SpecialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
      <SpecialOffer />
    </>
  );
};

export default Home;
