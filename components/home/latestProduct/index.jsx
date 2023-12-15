import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Skeleton from "@/components/shared/skeleton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/sass/specialSlide.module.scss";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

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
        <div className="bg-gray-dark py-10">
          <Container>
            <div className="grid grid-cols-3 ">
              <div className="text-white   col-span-3 md:col-span-2 sm:col-span-2 lg:col-span-1 h-32">
                <h2>The Latest Products</h2>
                <span>New and popular items at competitive prices</span>
              </div>
              <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2  ">
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
                      slidesPerView: 2,
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
                                  <span>
                                    ${item.sell_price.toLocaleString()}
                                  </span>
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
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default LatestProduct;
