import Button from "@/components/shared/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-yellow flex justify-center">
      <div className="xl:w-[70%]  w-[100%] h-[300px] sm:h-[300px] md:h-[700px] xl:h-[700px] lg:h-[500px] relative xl:mt-14 ">
        <Image src="/img/aboutUs.png" fill />
        <div className="bg-yellow opacity-90 absolute md:w-80  w-[85%] sm:w-[85%]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-white px-5 ">
          <h2>About Us</h2>
          <p className="leading-6 text-sm text-justify">
            About Us United Auto Sales Ltd would be honored to have you as a
            friend and a customer. We are here to collect best cars available in
            the market and help you to choose the best one based on your needs
            and interests.
          </p>
          <Button className="btn w-52 mb-2 ">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
