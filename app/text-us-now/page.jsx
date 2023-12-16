"use client";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { useAppStore } from "@/hooks/store";
import { useEffect } from "react";
import Container from "@/components/shared/container";
import Input from "@/components/shared/input";
import TextArea from "@/components/shared/textArea";
import Button from "@/components/shared/button";
import Swiper from "@/components/home/latestProduct/swiper";

const TextUsNow = () => {
  const { setActiveMenu } = useAppStore();
  useEffect(() => {
    setActiveMenu({ activeMenu: "/text-us-now" });
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-dark  text-white">
      {/* <Container>
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
        <div className="bg-gray-normal py-2 px-2">
          <form>
            <h1>Personal Information</h1>
            <div className="grid grid-cols-2 gap-6">
              <Input
                className="h-8 border-white bg-transparent text-white"
                placeholder="First Name"
              />
              <Input
                className="h-8 border-white bg-transparent text-white "
                placeholder="Last Name"
              />
              <Input
                className="h-8 border-white bg-transparent text-white"
                placeholder="Email"
              />
              <Input
                className="h-8 border-white bg-transparent text-white "
                placeholder="Phone"
              />
              <TextArea
                className="col-span-2 h-52 font-extrabold bg-transparent text-white"
                placeholder="Message"
              />
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </Container> */}
      <Container>
        <div className="grid grid-cols-1 relative">
          <Swiper />
        </div>
      </Container>
    </div>
  );
};

export default TextUsNow;
