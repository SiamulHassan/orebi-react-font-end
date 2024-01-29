import React from "react";
import Container from "../../components/layout/Container";
import BreadCrumb from "../../components/layout/BreadCrumb";
import FormLayout from "../../components/layout/FormLayout";
import Input from "../../components/layout/Input";
import Button from "../../components/layout/Button";
import { useFormik } from "formik";
import { contact } from "../../validation/validation";
import InputError from "../../components/layout/InputError";
const Contacts = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: contact,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <Container>
        <BreadCrumb />
        <FormLayout onSubmit={formik.handleSubmit} formTitle="Fill up a Form">
          <Input
            onChange={formik.handleChange}
            name="name"
            value={formik.values.name}
            as="input"
            label="Name"
            placeholder="Your name here"
            type="text"
          />
          <InputError
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <Input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            as="input"
            label="Email"
            placeholder="Your email here"
            type="text"
          />
          <InputError
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <Input
            onChange={formik.handleChange}
            name="message"
            value={formik.values.message}
            as="textarea"
            placeholder="Your message here"
            label="Message"
            type="text"
          />
          <InputError
            error={formik.errors.message}
            touched={formik.touched.message}
          />

          <Button type={"submit"} className={"mt-7 inline-block"}>
            Post
          </Button>
        </FormLayout>
      </Container>
    </div>
  );
};

export default Contacts;
