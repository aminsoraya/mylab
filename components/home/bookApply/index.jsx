"use client";
import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

const BookApply = () => {
  const imageUrl =
    "/img/2022_bentley_flying_spur_hybrid_5k_7-HD-1-scaled-pqj35bw2yuysg3t40p19etb8ekfo1l8dsc9w53a6q0.jpg";

  return (
    <Container>
      <div className="relative py-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div className={`h-96 relative hidden lg:hidden xl:block`}>
            <Image src={imageUrl} fill placeholder="empty" />
          </div>
          <div className={"flex flex-col  justify-center text-white px-5 h-96"}>
            <h2 className="whitespace-nowrap">Apply For Financing</h2>
            <p className="text-justify font-light leading-6">
              The United Auto Sales Ltd financing application is dedicated to
              exceeding your expectations throughout your visit to our
              dealership. We make every effort to ensure that each customer is
              completely satisfied.
            </p>
            <Button className="w-52 !text-center h-10 flex justify-center text-sm">
              Apply Now
            </Button>
          </div>
          <div className={"flex flex-col  justify-center text-white px-5 h-96"}>
            <h2 className="whitespace-nowrap">Book An Appointment</h2>
            <p className="text-justify font-light leading-6 ">
              The majority of customers now prefer to be able to book
              appointments quickly and easily online , So we here at United Auto
              Sales Ltd have decided to provide you with the tools needed for
              booking an appointment at the time of your convenience .
            </p>
            <Button className="w-52 !text-center h-10 flex justify-center text-sm">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookApply;
