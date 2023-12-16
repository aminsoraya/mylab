import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/sass/specialSlide.module.scss";
import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Skeleton from "@/components/shared/skeleton";
import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

const SwiperComponent = () => {
  let { baseSpecialImageUrl, baseUrl, domain } = useAppStore();

  let { data: specialData, isLoading } = useSWR(
    `${baseUrl}/api/dealership/vehicles/${domain}/special`,
    useVehicles
  );

  return (
    <>
      {isLoading && <Skeleton height={"200px"} />}
      {specialData && (
        <Swiper
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {specialData?.data?.map((item, index) => {
            if (item.thumbnail_cover_image != null)
              return (
                <SwiperSlide key={index}>
                  <div className={styles.container}>
                    <div className={styles.body}>
                      <div className="w-full h-[200px] flex">
                        <div className={styles.img}>
                          <div className={styles.content}>
                            <Image
                              fill
                              src={`${baseSpecialImageUrl}${item.thumbnail_cover_image}`}
                            />
                          </div>
                        </div>
                        <div className={styles.side}>
                          <span>${item.sell_price.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className={`${styles.button} text-white`}>
                        <span className="mt-2 -tracking-tighter !font-light">
                          {item.Vehicle.model_year}
                          {item.Vehicle.make}
                        </span>
                        <Button className="absolute bottom-5 w-32">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      )}
    </>
  );
};

export default SwiperComponent;
