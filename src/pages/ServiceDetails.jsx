import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetailsBanner from "../components/ServiceDetailsBanner";
import { allServices } from "../constant";

const LeadForm = React.lazy(() => import("../components/LeadForm"));

const ServiceDetails = () => {
  const { title } = useParams();
  const data = allServices.find((item) => item.link === title);

  return (
    <>
      <ServiceDetailsBanner
        banner={data.detailsPage.banner}
        title={data.title}
      />
      <div className="wrapper pt-[5rem] space-y-5">
        <h1 className="section-heading">{data.title}</h1>
        <img
          loading="lazy"
          src={data.detailsPage.img1}
          className="aspect-[6/4] md:aspect-[13/6] object-cover rounded-lg"
          alt={data.title}
        />
        <div
          className="pt-[1.5rem]"
          dangerouslySetInnerHTML={{ __html: data.detailsPage.firstSection }}
        ></div>
        <div className="pt-[2rem] md:pt-[2.5rem] flex flex-col-reverse md:grid grid-cols-2 gap-4 md:gap-6">
          <div
            dangerouslySetInnerHTML={{ __html: data.detailsPage.secondSection }}
          ></div>
          <div className="flex h-full">
            <img
              loading="lazy"
              src={data.detailsPage.img2}
              alt={data.title}
              className="rounded-lg aspect-square max-h-[30rem] object-cover"
            />
          </div>
        </div>
        <div className="pt-[2rem] md:pt-[2.5rem] grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex h-full">
            <img
              loading="lazy"
              src={data.detailsPage.img3}
              alt={data.title}
              className="rounded-lg max-h-[30rem] aspect-square object-cover"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.detailsPage.thirdSection }}
          ></div>
        </div>
      </div>
      {/* <Testimonials /> */}
      <LeadForm />
    </>
  );
};

export default ServiceDetails;
