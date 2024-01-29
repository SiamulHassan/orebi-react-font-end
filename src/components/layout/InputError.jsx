/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputError = ({ error, touched }) => {
  return (
    <>
      {error && touched ? (
        <p className="font-primaryFont mt-3 text-base text-red-400">{error}</p>
      ) : null}
    </>
  );
};

export default InputError;
