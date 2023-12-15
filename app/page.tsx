"use client";

import Slider from "@/components/home/slider";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const LatestProduct = dynamic(() => import("@/components/home/latestProduct"), {
  ssr: false,
});
// const BookApply = dynamic(() => import("@/components/home/bookApply"), {
//   ssr: false,
// });

// const AboutUs = dynamic(() => import("@/components/home/aboutUs"), {
//   ssr: false,
// });

// const GoogleReview = dynamic(() => import("@/components/home/googleReview"), {
//   ssr: false,
// });

export default function Home() {
  const { inView: LatestProductInView, ref: latestProductRef } = useInView({
    threshold: 0,
  });

  // const { inView: BookApplyInView, ref: bookApplyRef } = useInView({
  //   threshold: 0,
  // });

  // const { inView: AboutUsInView, ref: aboutUsRef } = useInView({
  //   threshold: 0,
  // });

  // const { inView: GoogleReviewInView, ref: googleReviewRef } = useInView({
  //   threshold: 0,
  // });

  return (
    <div className="h-screen w-full">
      <Slider />

      <div ref={latestProductRef} className="pb-[100px]">
        {LatestProductInView && <LatestProduct />}
      </div>

      {/* <div
        ref={bookApplyRef}
        style={{
          minHeight: "100px",
          width: "100%",
          position: "relative",
          background: "#2e2e2e",
        }}
      >
        {BookApplyInView && <BookApply />}
      </div> */}

      {/* <div
        ref={aboutUsRef}
        style={{ width: "100%", minHeight: "100px", background: "#b29952" }}
      >
        {AboutUsInView && <AboutUs />}
      </div> */}

      {/* <div
        style={{ width: "100%", minHeight: "100px", background: "#b29952" }}
        ref={googleReviewRef}
      >
        {GoogleReviewInView && <GoogleReview />}
      </div> */}
    </div>
  );
}
