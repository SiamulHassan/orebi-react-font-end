import React from "react";
import Container from "../../components/layout/Container";
import BreadCrumb from "../../components/layout/BreadCrumb";
import FormLayout from "../../components/layout/FormLayout";
import Input from "../../components/layout/Input";
import Button from "../../components/layout/Button";
import Devider from "../../components/layout/Devider";

const Login = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <p className="max-w-[644px] font-dm text-base leading-[30px] text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Devider />
        <div className="mt-14">
          <FormLayout formTitle={"Returning Customer"}>
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
              <Input
                as="input"
                label="Email address"
                placeholder="company@domain.com"
                type="text"
              />
              <Input
                as="input"
                label="Password"
                placeholder="..."
                type="password"
              />
            </div>
            <Button className={"mt-7 inline-block"} bg="bg-white">
              Login
            </Button>
            <Devider />
          </FormLayout>
          <h4 className="mb-10 mt-14 font-dm text-4xl font-bold text-colorBlack">
            New Customer
          </h4>
          <p className="max-w-[644px] font-dm text-base leading-[30px] text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Button className={"mt-7 inline-block"}>Continue</Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
