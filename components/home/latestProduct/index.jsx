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
         
          <div className="bg-gray-normal grid grid-cols-2">
            <div>

            </div>
            <div className="bg-red-200">2</div>
          </div>
         
      )}
    </>
  );
};

export default LatestProduct;
