import React, { useState } from "react";
import Devider from "../../components/layout/Devider";
import Input from "../../components/layout/Input";
import FormLayout from "../../components/layout/FormLayout";
import BreadCrumb from "../../components/layout/BreadCrumb";
import Container from "../../components/layout/Container";
import SelectBox from "../../components/layout/SelectBox";
import FormSelectBox from "../../components/layout/FormSelectBox";
import Button from "../../components/layout/Button";
import { useFormik } from "formik";
import { signUp } from "../../validation/validation";
import InputError from "../../components/layout/InputError";
//ak
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
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    postCode: "",
    division: "",
    district: "",
    password: "",
    repeatPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUp,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <Container>
      <BreadCrumb />
      <p className="max-w-[644px] font-dm text-base leading-[30px] text-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <Devider />
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div className="mt-14">
        <FormLayout
          formTitle={"Your Personal Details"}
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="firstName"
                value={formik.values.firstName}
                as="input"
                label="First Name"
                placeholder="First Name"
                type="text"
              />
              <InputError
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="lastName"
                value={formik.values.lastName}
                as="input"
                label="Last Name"
                placeholder="Last Name"
                type="text"
              />
              <InputError
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                as="input"
                label="Email address"
                placeholder="company@domain.com"
                type="text"
              />
              <InputError
                error={formik.errors.email}
                touched={formik.touched.email}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="telephone"
                values={formik.values.telephone}
                as="input"
                label="Telephone"
                placeholder="Telephone"
                type="text"
              />
              <InputError
                error={formik.errors.telephone}
                touched={formik.touched.telephone}
              />
            </div>
          </div>
        </FormLayout>
      </div>
      <Devider />
      <div className="mt-14">
        <FormLayout formTitle={"New Customer"} onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="addressOne"
                values={formik.values.addressOne}
                as="input"
                label="Address 1"
                placeholder="4279 Zboncak Port Suite 6212"
                type="text"
              />
              <InputError
                error={formik.errors.addressOne}
                touched={formik.touched.addressOne}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="addressTwo"
                values={formik.values.addressTwo}
                as="input"
                label="Address 2"
                placeholder="_"
                type="text"
              />{" "}
              <InputError
                error={formik.errors.addressTwo}
                touched={formik.touched.addressTwo}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="city"
                values={formik.values.city}
                as="input"
                label="City"
                placeholder="Your city"
                type="text"
              />{" "}
              <InputError
                error={formik.errors.city}
                touched={formik.touched.city}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="postCode"
                values={formik.values.postCode}
                as="input"
                label="Post Code"
                placeholder="05228"
                type="text"
              />{" "}
              <InputError
                error={formik.errors.postCode}
                touched={formik.touched.postCode}
              />
            </div>
            <div className="mb-5">
              <FormSelectBox
                Box
                onChange={formik.handleChange}
                name="division"
                values={formik.values.division}
                label="Division"
                id="division"
                options={divisions}
              />
              <InputError
                error={formik.errors.division}
                touched={formik.touched.division}
              />
            </div>
            <div className="mb-5">
              <FormSelectBox
                onChange={formik.handleChange}
                name="district"
                values={formik.values.district}
                label="District"
                id="district"
                options={districts}
              />
              <InputError
                error={formik.errors.district}
                touched={formik.touched.district}
              />
            </div>
          </div>
        </FormLayout>
      </div>
      <Devider />
      <div className="mt-14">
        <FormLayout formTitle={"Your Password"} onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="password"
                values={formik.values.password}
                as="input"
                label="Password"
                placeholder="Password"
                type="text"
              />
              <InputError
                error={formik.errors.password}
                touched={formik.touched.password}
              />
            </div>
            <div className="mb-5">
              <Input
                onChange={formik.handleChange}
                name="repeatPassword"
                values={formik.values.repeatPassword}
                as="input"
                label="Repeat Password"
                placeholder="Repeat Password"
                type="text"
              />
              <InputError
                error={formik.errors.repeatPassword}
                touched={formik.touched.repeatPassword}
              />
            </div>
          </div>
        </FormLayout>
      </div>
      <Devider />
      <FormLayout onSubmit={formik.handleSubmit}>
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
        <Button type="submit" className={"cursor-pointer"}>
          Login
        </Button>
      </FormLayout>
      {/* </form> */}
    </Container>
  );
};

export default SignUp;
