"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useSliderData } from "@/hooks/actions/sliders";
import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import Skeleton from "@/components/shared/skeleton";
import Welcome from "./welcom";

export default function Slider() {
  let { baseImageUrl, baseUrl, domain } = useAppStore();

  let { data, isLoading } = useSWR(
    `${baseUrl}/api/dealerweb/websliders/${domain}`,
    useSliderData
  );

  return (
    <>
      {isLoading && <Skeleton height={500} />}
      {data && (
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data?.rows?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative  h-[700px] w-full">
                    <Image
                      src={`${baseImageUrl}${item.image_name}`}
                      alt=""
                      fill
                      loading="lazy"
                      placeholder="empty"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 75vw"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Welcome />
        </div>
      )}
    </>
  );
}
