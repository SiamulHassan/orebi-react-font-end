import React, { useState } from "react";
import Devider from "../../components/layout/Devider";
import Input from "../../components/layout/Input";
import FormLayout from "../../components/layout/FormLayout";
import BreadCrumb from "../../components/layout/BreadCrumb";
import Container from "../../components/layout/Container";
import SelectBox from "../../components/layout/SelectBox";
import FormSelectBox from "../../components/layout/FormSelectBox";
import Button from "../../components/layout/Button";
const districts = [
  {
    label: "Dhaka",
    value: "Dhaka",
  },
  {
    label: "Rajshahi",
    value: "Rajshahi",
  },
  {
    label: "Dinajpur",
    value: "Dinajpur",
  },
  {
    label: "Sylet",
    value: "Sylet",
  },
];
const divisions = [
  {
    label: "DhakA",
    value: "DhakA",
  },
  {
    label: "RajshahI",
    value: "RajshahI",
  },
  {
    label: "DinajpuR",
    value: "DinajpuR",
  },
  {
    label: "SyleT",
    value: "SyleT",
  },
];
const SignUp = () => {
  // const [division,setDivison] = useState(null);
  // const [district,setDistrict] = useState(null);
  return (
    <Container>
      <BreadCrumb />
      <p className="max-w-[644px] font-dm text-base leading-[30px] text-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <Devider />
      <div className="mt-14">
        <FormLayout formTitle={"Your Personal Details"}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <Input
              as="input"
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <Input
              as="input"
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
            <Input
              as="input"
              label="Email address"
              placeholder="company@domain.com"
              type="text"
            />
            <Input
              as="input"
              label="Telephone"
              placeholder="Telephone"
              type="text"
            />
          </div>
        </FormLayout>
      </div>
      <Devider />
      <div className="mt-14">
        <FormLayout formTitle={"New Customer"}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <Input
              as="input"
              label="Address 1"
              placeholder="4279 Zboncak Port Suite 6212"
              type="text"
            />
            <Input as="input" label="Address 2" placeholder="_" type="text" />
            <Input
              as="input"
              label="City"
              placeholder="Your city"
              type="text"
            />
            <Input
              as="input"
              label="Post Code"
              placeholder="05228"
              type="text"
            />
            <FormSelectBox
              Box
              label="Division"
              id="division"
              options={divisions}
            />
            <FormSelectBox label="District" id="district" options={districts} />
          </div>
        </FormLayout>
      </div>
      <Devider />
      <div className="mt-14">
        <FormLayout formTitle={"Your Password"}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <Input
              as="input"
              label="Password"
              placeholder="Password"
              type="text"
            />
            <Input
              as="input"
              label="Repeat Password"
              placeholder="Repeat Password"
              type="text"
            />
          </div>
        </FormLayout>
      </div>
      <Devider />
      <div className="my-16">
        <div className="mb-5 flex items-center gap-3">
          <input type="checkbox" />
          <span className="font-dm text-sm text-secondary">
            I have read and agree to the Privacy Policy
          </span>
        </div>
        <div className="flex items-center gap-8 text-secondary">
          <span>Subscribe Newsletter</span>
          <div className="flex items-center gap-10">
            <div>
              <input type="checkbox" id="yes" />
              <label htmlFor="yes" className="ml-3">
                Yes
              </label>
            </div>
            <div>
              <input id="no" type="checkbox" />
              <label htmlFor="no" className="ml-3">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <Button className={"cursor-pointer"}>Login</Button>
    </Container>
  );
};

export default SignUp;
