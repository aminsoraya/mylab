"use client";
import { useLayoutEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useAppStore } from "@/hooks/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgressContainer from "@/components/shared/progressBar";
import Container from "./container";

const Layout = (props) => {
  let {
    children,
    domain,
    dealerData,
    baseUrl,
    baseImageUrl,
    baseSpecialImageUrl,
  } = props;
  const { setInitialData } = useAppStore();

  useLayoutEffect(() => {
    setInitialData({
      domain,
      dealerData,
      baseUrl,
      baseImageUrl,
      baseSpecialImageUrl,
    });
  }, [domain, dealerData, baseUrl, baseImageUrl, baseSpecialImageUrl]);

  return (
    dealerData && (
      <>
        <NProgressContainer />
        <Header />
        {children}
        {/* <ToastContainer /> */}
        {/* <Footer /> */}
      </>
    )
  );
};

export default Layout;
