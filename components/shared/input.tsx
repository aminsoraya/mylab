import React from "react";

const Input = (
  props?: Partial<React.InputHTMLAttributes<HTMLInputElement>>
) => {
  let { className, ...otherAttr } = props!;
  return (
    <input
      {...otherAttr}
      className={`w-full text-sm h-12 outline-none ${className ?? ""}`}
    />
  );
};

export default Input;
