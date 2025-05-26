import React from "react";
import icon1 from "../assets/images/Vector.png";
import icon2 from "../assets/images/Vector(1).png";
import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
// const WebsiteHeader = React.lazy(() =>
//   import("../components/website/WebsiteHeader")
// );
// const TrustWorthySection = React.lazy(() =>
//   import("../components/TrustWorthySection")
// );
// const Portfolio = React.lazy(() => import("../components/Portfolio"));
// const Testimonials = React.lazy(() => import("../components/Testimonials"));
// const JoinHappyCustomers = React.lazy(() =>
//   import("../components/JoinHappyCustomers")
// );
// const WebsiteFooter = React.lazy(() =>
//   import("../components/website/WebsiteFooter")
// );
// const AllServices = React.lazy(() =>
//   import("../components/website/AllServices")
// );
// const OurValue = React.lazy(() => import("../components/website/OurValue"));
// const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
// const LeadForm = React.lazy(() => import("../components/LeadForm"));
import WebsiteHeader from "../components/website/WebsiteHeader";
import TrustWorthySection from "../components/TrustWorthySection";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import JoinHappyCustomers from "../components/JoinHappyCustomers";
import WebsiteFooter from "../components/website/WebsiteFooter";
import AllServices from "../components/website/AllServices";
import OurValue from "../components/website/OurValue";
import WhyChooseUs from "../components/WhyChooseUs";
import LeadForm from "../components/LeadForm";

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcSet={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-center"
          alt="home-page-banner-image"
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-[1.50rem] md:text-[2.5rem] font-bold leading-tight text-white/80">
            Welcome to
            {/* <span className="text-primary font-semibold">
              MANYA AI
            </span> */}
          </p>
          <h1 className="heading text-stroke">MANYA AI</h1>
          <p className="max-w-[56rem] mt-2 text-sm sm:text-xl text-white/80">
            In today's fast-evolving digital landscape, businesses need
            innovative and reliable solutions to stay ahead. At{" "}
            <strong>MANYA AI</strong> , we offer a wide range of services that
            help you transform, scale, and optimize your operations. Whether
            you're looking to develop a cutting-edge mobile app, create stunning
            web designs, or leverage the power of artificial intelligence, our
            team is here to bring your vision to life.
          </p>
        </div>
      </section>

      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt="home-page-aboutus-image"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt="home-page-aboutus-imagetwo"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Visions into Reality
              </h2>
              <p className="desc">
                At <b>MANYA AI</b>, we leverage the transformative power of
                artificial intelligence to catalyze remarkable change across
                industries. Our unwavering commitment to transparency and
                reliability is what truly sets us apart in a crowded market
                place .We empower organizations with cutting-edge AI
                technologies that elevate data-driven insights, streamline
                complex processes, and ignite strategic growth.
                <br />
                <br />
                Our innovative solutions are designed not just to meet the
                demands of today but to anticipate the challenges of tomorrow,
                ensuring that your business stays ahead of the curve.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link
                to="/about-us"
                className="primary-btn"
                aria-label={`Navigate to about page`}
              >
                Know More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
