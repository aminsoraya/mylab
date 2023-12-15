
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

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
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="bg-gray-200">
          <h2>Hellol there</h2>
        </div>
        <div className="bg-gray-300 ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviews.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="h-[300px] p-12 px-16 bg-gray text-white">
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
    </>
  );
};

export default LatestProduct;
