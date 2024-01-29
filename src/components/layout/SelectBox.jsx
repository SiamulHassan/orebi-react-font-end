import React from "react";

const SelectBox = ({ label, options, id, setVal }) => {
  const handleSortAndPageShow = (e) => {
    // dont conver the value to number here, cause both num and string onchange value needed,so covert where its necessary
    setVal(e.target.value);
  };
  return (
    <>
      <label
        htmlFor={id}
        className="mb-2 block font-dm text-base text-secondary"
      >
        {label}
      </label>
      <select
        onChange={handleSortAndPageShow}
        id={id}
        className="block w-[80%] rounded-sm border border-gray-300 bg-white p-2 text-sm text-secondary focus:border-black md:w-[40%] lg:w-1/5"
      >
        {options.map((opt, i) => (
          <option value={opt.value} key={i}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
