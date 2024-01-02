// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

////////// or
// const RootLayout = ({children}) => {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       {/* outlet gulake rootLayout component diye wrap kora */}
//       {children}
//       <Footer />
//     </>
//   );
// }
// const Home = () => {
//   return (
//     <RootLayout>
//      all home page components goes here
//     </RootLayout>
//   );
// }
