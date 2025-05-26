import { lazy } from "react";
import { Outlet } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const WebsiteHeader = lazy(() => import("./WebsiteHeader"));
const WebsiteFooter = lazy(() => import("./WebsiteFooter"));
const WhatsAppIcon = lazy(() => import("../components/WhatsAppIcon"));

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });
  return (
    <div>
      <WebsiteHeader />
      <WhatsAppIcon />
      <ScrollToTop />
      <div className="">
        <Outlet />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default AppLayout;
