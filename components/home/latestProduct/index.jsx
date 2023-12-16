import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import { useVehicles } from "@/hooks/actions/vehicles";
import Skeleton from "@/components/shared/skeleton";
import Image from "next/image";
import Swiper from "./swiper";
import styles from "@/assets/sass/specialSlide.module.scss";
import Container from "@/components/shared/container";
import Button from "@/components/shared/button";

const LatestProduct = () => {
  return (
    <>
      <div className="bg-gray-dark py-10">
        <Container>
          <div className="grid grid-cols-3 ">
            <div className="text-white   col-span-3 md:col-span-2 sm:col-span-2 lg:col-span-1 h-32">
              <h2>The Latest Products</h2>
              <span>New and popular items at competitive prices</span>
            </div>
            <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2  ">
              <Swiper />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LatestProduct;
