import "@/assets/sass/latestProduct.scss";
import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Skeleton from "@/components/shared/skeleton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/sass/specialSlide.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import RootContainer from "@/components/shared/container";

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
        <RootContainer>
          <div style={{ position: "relative" }}>
            <div className="row">
              <Row className="pt-10 pl-10" dir="rtl">
                <Col md={4}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ whiteSpace: "nowrap" }}>
                      The Latest Products
                    </h1>
                    <span>New and popular items at competitive prices</span>
                  </div>
                </Col>

                <Col md={8} dir="ltr">
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
                        slidesPerView: 1,
                        spaceBetweenSlides: 100,
                      },
                    }}
                    slidesPerView={2}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className={styles.slideContainer}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                  >
                    {specialData?.data?.map((item, index) => {
                      if (item.thumbnail_cover_image != null)
                        return (
                          <SwiperSlide key={index}>
                            <div className={styles.container}>
                              <div className={styles.body}>
                                <div
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "200px",
                                  }}
                                >
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
                                <div className={styles.button}>
                                  <span>
                                    {item.Vehicle.model_year}
                                    {item.Vehicle.make}
                                  </span>
                                </div>
                              </div>
                              <button style={{position:"absolute"}}>View Details</button>
                            </div>
                          </SwiperSlide>
                        );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </div>
          </div>
        </RootContainer>
      )}
    </>
  );
};

export default LatestProduct;
