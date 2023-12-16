import { useAppStore } from "@/hooks/store";
import { useMemo } from "react";
import SubmitForm from "./form";
import Container from "../container";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  let { dealerData } = useAppStore();

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeWorks = useMemo(() => {
    return dealerData?.timeWork
      ?.filter((s) => s.startAt != "")
      .map((item, index) => {
        return {
          ...item,
          dayName: days[index],
        };
      });
  }, [dealerData?.timeWork]);

  return (
    <div className="w-full bg-gray-normal text-white text-sm">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-1  py-10">
          <div className="flex flex-col">
            <h2>Contact Us</h2>
            <div className="text-xs min-h-[30px]">
              <span>
                <IoMdArrowDropright />
              </span>
              <span>Address:</span>
              <span className="pr-2 text-justify">
                {dealerData?.business_street}
                {", "}
                {dealerData?.business_city?.city}
                {", "}
                {dealerData?.business_city?.Province?.province === "Alberta"
                  ? "Ab"
                  : dealerData?.business_city?.Province?.province}
                {", "}
                {dealerData?.business_postal}
              </span>
            </div>
            <div className="text-xs min-h-[30px] flex items-center">
              <span>
                <IoMdArrowDropright />
              </span>
              <span>Phone Number:</span>
              <span>{dealerData?.business_phone}</span>
            </div>
            <div>
              <iframe
                allow="geolocation"
                src={dealerData?.map_url}
                frameborder="0"
                width="100%"
                height="320"
                className="border-0 w-100 p-0 m-0"
                aria-hidden="false"
                tabindex="0"
                id="iframe"
              />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-fit h-full justify-between">
              <h2>Business Hours</h2>
              <div className="flex flex-col justify-evenly h-full">
                {timeWorks?.map((item, index) => {
                  return (
                    <div className="flex items-center">
                      <span>{item.dayName}</span>
                      <span key={index}>
                        {item.startAt} - {item.endAt}{" "}
                      </span>
                    </div>
                  );
                })}
                <h3 className="text-yellow-custom">United Auto Sales Ltd</h3>
              </div>
            </div>
          </div>
          <div>
            <SubmitForm />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <hr className="text-gray-400 w-full" />
          <div className="w-full grid grid-cols-1 md:grid-cols-3  justify-center items-center text-center text-sm">
            <span className="h-10">© 2022 United Auto Sales Ltd</span>
            <span className="h-10"> Powered By Hillzdealer </span>
            <span className="h-10">Privacy & Policy</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
