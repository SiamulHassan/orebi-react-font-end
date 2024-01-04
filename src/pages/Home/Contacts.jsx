import React from "react";
import Container from "../../components/layout/Container";
import BreadCrumb from "../../components/layout/BreadCrumb";
import FormLayout from "../../components/layout/FormLayout";
import Input from "../../components/layout/Input";
import Button from "../../components/layout/Button";
const Contacts = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <FormLayout formTitle="Fill up a Form">
          <Input
            as="input"
            label="Name"
            placeholder="Your name here"
            type="text"
          />
          <Input
            as="input"
            label="Email"
            placeholder="Your email here"
            type="text"
          />
          <Input
            as="textarea"
            placeholder="Your message here"
            label="Message"
            type="text"
          />
          <Button className={"mt-7 inline-block"}>Post</Button>
        </FormLayout>
      </Container>
    </div>
  );
};

export default Contacts;
