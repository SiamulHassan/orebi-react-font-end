// import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Button from "../../components/layout/Button";
import Search from "../../components/layout/Search";
import Container from "../../components/layout/Container";

const Error = () => {
  return (
    <Container>
      <h2 className="text-[100px] font-bold lg:text-[200px]">404</h2>
      <p className="text-regular max-w-[644px] leading-[30px] text-secondary">
        The page you were looking for couldn&#39;t be found. The page could be
        removed or you misspelled the word while searching for it. Maybe try a
        search?
      </p>

      <div className="relative my-[50px] w-auto sm:w-[350px] lg:w-[600px] ">
        <Search
          className="w-full py-2 pl-3 pr-8 focus:outline-none lg:py-4 lg:pl-5 lg:pr-12 lg:focus:outline-black"
          placeholder="Search Products"
        />
        <IoIosSearch className="h:5 absolute right-2 top-1/2 w-5 -translate-y-1/2 lg:right-4 lg:h-6 lg:w-6" />
      </div>
      <Button className="">Back to Home</Button>
    </Container>
  );
};
export default Error;
