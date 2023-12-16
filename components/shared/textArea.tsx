import React from "react";

const TextArea = (
  props?: Partial<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
  >
) => {
  let { className, ...otherAttr } = props!;
  return (
    <textarea
      {...otherAttr}
      className={`w-full text-sm h-12 outline-none ${className ?? ""}`}
    />
  );
};

export default TextArea;
