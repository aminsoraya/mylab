import React from "react";
interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit";
}
export default function Button({ type="button", className, children, onClick }: IProps) {
  return (
    <>
      <button
        type={type}
        className={`flex cursor-pointer justify-center items-center h-12 border-none text-white bg-yellow ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
