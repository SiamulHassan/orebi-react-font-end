import React from "react";

const Input = (props) => {
  const width = props.width ? "w-full" : "max-w-[770px]";
  return (
    <div className={`mb-5 ${width}`}>
      <h4 className="mb-2 font-dm text-base font-bold leading-6 text-colorBlack">
        {props.label}
      </h4>
      <props.as
        className="w-full resize-none border-b border-solid border-slate-300 pb-2 outline-none"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
