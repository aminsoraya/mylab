"use client";
import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-screen flex justify-center    relative">
      <div className="max-w-[1280px]  lg:w-[1280px] w-[95%]  relative  ">{children}</div>
    </div>
  );
}
