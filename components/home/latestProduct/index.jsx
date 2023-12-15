import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Skeleton from "@/components/shared/skeleton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Container from "@/components/shared/container";

const LatestProduct = () => {
  let { baseSpecialImageUrl, baseUrl, domain } = useAppStore();

  let { data: specialData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/vehicles/${domain}/special`,
    useVehicles
  );

  return (
    <>
      {isLoading && <Skeleton height={"200px"} />}
      {specialData && (
        <div className="bg-gray-normal grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
          <div className="sm:col-span-2 col-span-1 bg-blue-200 h-12">
            <Swiper
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 450,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 500,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 100,
                },
              }}
              slidesPerView={2}
              modules={[Pagination, Navigation, Autoplay]}
              navigation={true}
              autoplay={{
                delay: 250000,
                disableOnInteraction: false,
              }}
            >
              {specialData?.data?.map((item, index) => {
                if (item.thumbnail_cover_image != null)
                  return (
                    <SwiperSlide key={index}>
                      <div className="relative h-80 w-full bg-gray-dark flex items-center justify-center">
                        <div className="w-40 h-52 !bg-blue-200 relative">
                          <Image
                            fill
                            src={`${baseSpecialImageUrl}${item.thumbnail_cover_image}`}
                          />
                        </div>
                      </div>
{/* 
                      {item.Vehicle.model_year}
                      {item.Vehicle.make} */}
                    </SwiperSlide>
                  );
              })}
            </Swiper>
          </div>
          <div className="bg-red-200 h-12">2</div>
        </div>
      )}
    </>
  );
};

export default LatestProduct;
