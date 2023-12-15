import React from "react";
interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function Button({ className, children, onClick }: IProps) {
  return (
    <>
      <button
        className={`flex cursor-pointer items-center h-12 border-none text-white bg-yellow ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
