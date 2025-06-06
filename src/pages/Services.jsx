import React from "react";

const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);

const Services = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        desc="At MANYA AI, we are not just committed to driving growth; we also cultivate a culture of continuous learning and innovation within our team. Our passionate engineers and data scientists are encouraged to explore new ideas, push boundaries, and embrace the latest advancements in AI technology."
      />
      <AllServices />
      <OurValue />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
    </>
  );
};

export default Services;
