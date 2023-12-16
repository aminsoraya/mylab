"use client";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { useAppStore } from "@/hooks/store";
import { useEffect } from "react";
import Container from "@/components/shared/container";

const TextUsNow = () => {
  const { setActiveMenu } = useAppStore();
  useEffect(() => {
    setActiveMenu({ activeMenu: "/text-us-now" });
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-dark h-96  text-white">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <h1>Text Us Now</h1>
            <p className="leading-6">
              Send us a quick note using the form below. We will get back to you
              very shortly.Your comments, suggestions, and feedback is very
              important to us. It is our mission to accommodate, and serve you
              as best as we possibly can.
            </p>
          </div>
          <div className="relative h-80">
            <Image fill src="/img/Text-us-now.jpg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TextUsNow;
