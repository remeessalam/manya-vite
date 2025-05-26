import { Outlet } from "react-router-dom";

import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppIcon from "../components/WhatsAppIcon";
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
