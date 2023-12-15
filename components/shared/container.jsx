"use client";
import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-screen flex justify-center  relative">
      <div className="max-w-[1280px]  lg:w-[90%] md:w-[80%] w-[90%] relative  ">{children}</div>
    </div>
  );
}
