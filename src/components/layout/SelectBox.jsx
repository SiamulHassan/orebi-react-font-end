import React from "react";

const SelectBox = ({ label, options, setShowNum }) => {
  const handleChange = (e) => {
    // dont covert to num cause sortby ta string hobe, so jekhane use kora hobe proyojon e sekhane num e convert korba
    setShowNum(e.target.value);
  };
  return (
    <>
      <label
        htmlFor="countries"
        className="mb-2 block font-dm text-base text-secondary"
      >
        {label}:
      </label>
      <select
        onChange={handleChange}
        id="countries"
        className="block w-1/5 rounded-sm border border-gray-300 bg-white p-2 text-sm text-secondary focus:border-black"
      >
        {options.map((opt, i) => (
          <option value={opt.value} selected={opt.selected} key={i}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
