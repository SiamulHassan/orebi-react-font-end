import React from "react";

const FormLayout = ({ formTitle, children }) => {
  return (
    <form>
      <h2 className="mb-10 font-dm text-4xl font-bold text-colorBlack">
        {formTitle}
      </h2>
      {children}
    </form>
  );
};

export default FormLayout;
