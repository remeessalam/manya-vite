import React from "react";
import WebsiteHeader from "../Layout/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.webp";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);

const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <PageBanner title="About Us" />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt="about-main-image"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about-main-image-two"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Visions into Technological Reality
              </h2>
              <p className="desc">
                At <b>MANYA AI</b>, we leverage the transformative power of
                artificial intelligence to catalyse remarkable change across
                industries. Our unwaveringcommitment to transparency and
                reliability is what truly sets us apart in a crowded
                marketplace.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-[2rem]">
          <h2 className="text-xl font-medium">Where AI Meets Integrity</h2>
          <p className="desc mt-2">
            Our innovative solutions are designed not just to meet the demands
            of today but to anticipate the challenges of tomorrow, ensuring that
            your business stays ahead of the curve. What drives us is our
            steadfast adherence to ethical principles and integrity. We believe
            that true innovation is grounded in responsibility, fostering trust
            and long-term partnerships with our clients. Together, let’s unlock
            the potential of AI and transform your vision into reality!
          </p>
        </div>
        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Visionary Goals
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                At <b>MANYA AI</b>, we don’t just build AI; we craft intelligent
                ecosystems that evolve and thrive alongside your business.
                <br />
                <br />
                Situated in the heart of Bengaluru's vibrant innovation hub, our
                dedicated team of tech-savvy engineers, data scientists, and AI
                visionaries is driven by a singular mission: to redefine what’s
                possible with artificial intelligence.
                <br />
                <br />
                Our diverse expertise spans multiple industries, empowering
                businesses of all sizes to harness the transformative power of
                AI and unlock invaluable data-driven insights.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt="about-main-image-three"
              />
            </div>
          </div>
        </div>
      </section>
      <TrustWorthySection />
      <section className="wrapper py-[3rem] bg-tertiary">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt="about-main-image-four"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc">
              Our mission is to empower innovation through ethical AI, ensuring
              that every technological advancement is firmly rooted in integrity
              and responsibility. We recognize that innovation is not merely
              about cutting-edge technology; it must also align with ethical
              principles that enhance trust and accountability. As such, we are
              dedicated to catalyzing transformative change across various
              industries, leveraging the immense power of artificial
              intelligence to tackle unique challenges and unlock new
              opportunities for growth and efficiency.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />

      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
    </>
  );
};

export default AboutUs;
