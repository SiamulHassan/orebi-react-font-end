import React from "react";
import Container from "../../components/layout/Container";
import BreadCrumb from "../../components/layout/BreadCrumb";
import { Link } from "react-router-dom";
import FormLayout from "../../components/layout/FormLayout";
import Input from "../../components/layout/Input";
import FormSelectBox from "../../components/layout/FormSelectBox";
const countries = [
  {
    label: "Bangladesh",
    value: "Bangladesh",
  },
  {
    label: "Pakistan",
    value: "Pakistan",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "USA",
    value: "USA",
  },
];
const Checkout = () => {
  return (
    <Container>
      <BreadCrumb />
      <p className="font-dm text-secondary">
        Have a coupon?
        <Link to="#" className="font-medium">
          Click
        </Link>
        here to enter your code
      </p>
      <div className="mt-28">
        <FormLayout formTitle={"Billing Details"}>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-[35%,35%]">
            <Input
              as="input"
              label="First Name *"
              placeholder="First Name"
              type="text"
            />
            <Input
              as="input"
              label="Last Name *"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div>
            <Input
              as="input"
              label="Companye Name (optional)"
              placeholder="Companye Name"
              type="text"
              width="fullWidth"
            />
            <FormSelectBox
              Box
              label="Country *"
              id="country"
              options={countries}
            />
            <Input
              as="input"
              label="Street Address *"
              placeholder="House number and street name"
              type="text"
              width="fullWidth"
            />
            <Input
              as="input"
              label=""
              placeholder="Apartment, suite, unit etc. (optional)"
              type="text"
              width="fullWidth"
            />

            <Input
              as="input"
              label="Town/City *"
              placeholder="Town/City"
              type="text"
              width="fullWidth"
            />
            <Input
              as="input"
              label="County (optional)"
              placeholder="County"
              type="text"
              width="fullWidth"
            />
            <Input
              as="input"
              label="Post Code *"
              placeholder="Post Code"
              type="text"
              width="fullWidth"
            />
            <Input
              as="input"
              label="Phone *"
              placeholder="Phone"
              type="text"
              width="fullWidth"
            />
            <Input
              as="input"
              label="Email Address *"
              placeholder="Email"
              type="text"
              width="fullWidth"
            />
          </div>

          <div className=" mt-28">
            <h2 className="mb-9 font-dm text-4xl font-bold text-colorBlack">
              Additional Information
            </h2>
            <Input
              as="textarea"
              label="Other Notes (optional)"
              placeholder="Notes about your order, e.g. special notes for delivery."
              type="text"
            />
          </div>
        </FormLayout>
        <div className="mt-28">
          <h2 className="mb-9 font-dm text-4xl font-bold text-colorBlack">
            Your Order
          </h2>
          <table className="w-[360px] border-collapse border border-slate-400 lg:w-1/2">
            <thead>
              <tr className="text-left">
                <th className="border border-blue-100 p-3">Product</th>
                <th className="border border-blue-100 p-3 font-normal text-secondary">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-100 p-3 font-bold">
                  Product name x 1
                </td>
                <td className="border border-blue-100 p-3 text-secondary">
                  389.99 $
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-blue-100 p-3 font-bold">
                  Subtotal
                </td>
                <td className="border border-solid border-blue-100 p-3">
                  389.99 $
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-blue-100 p-3 font-bold">
                  Total
                </td>
                <td className="border border-solid border-blue-100 p-3">
                  389.99 $
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
