import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaRegUserCircle, FaStar } from "react-icons/fa";
import Container from "@/components/shared/container";

const LatestProduct = () => {
  let reviews = [
    {
      src: "Jason Veilleux",
      content: "Friendly service. Good selection. Try the tea!",
    },
    {
      src: "Coquitlam TOWING",
      content:
        "These guys are great. Thank you for giving me a great deal on my first vehicle. A+++",
    },
    {
      src: "john lee",
      content:
        "I went to united auto sales and bought a 2017 Ford Escape. Their staff was very friendly, honest and helpful, i was very happy with my purchase. I would recommend purchasing a car from there.",
    },
  ];

  return (
    <Container>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 py-20 text-white">
        <div className="flex flex-col">
          <h2>Google Reviews</h2>
          <span className="text-sm">
            We are committed to making you a long-lasting customer and friend
          </span>
        </div>
        <div className=" w-full pt-10 lg:pt-0 googleReview-navigation">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation
            className="mySwiper"
          >
            {reviews.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="h-[200px] text-sm p-12 px-3  bg-gray-normal text-white">
                    <div className="flex items-center gap-5">
                      <span className="text-4xl">
                        <FaRegUserCircle />
                      </span>
                      <span className="text-xl">{item.src}</span>
                      <span className="flex items-center  w-[120px] justify-between pl-5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </div>
                    <div className="py-3 !font-thin px-4 text-justify leading-6 text-sm tracking-wide ">
                      {item.content}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <hr className="w-full" />
    </Container>
  );
};

export default LatestProduct;
