/* eslint-disable react/prop-types */
import React from "react";

const FormSelectBox = ({ label, id, options, onChange, value, name }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-2 block text-base font-bold text-colorBlack"
      >
        {label}
      </label>
      <select
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        className="w-full border-b pb-3 text-secondary outline-none"
      >
        {options.map((opt, i) => (
          <option className="text-secondary" key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelectBox;
