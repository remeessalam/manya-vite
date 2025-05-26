import { lazy } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const LeadForm = lazy(() => import("../components/LeadForm"));

const ContactUs = () => {
  return (
    <>
      <PageBanner title="Contact Us" />
      <div className="py-[3rem]">
        <div className="wrapper">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <MapPin
                strokeWidth={2}
                size={40}
                className="text-primary inline min-w-5"
              />
              <span className="text-center font-medium">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <Mail strokeWidth={2} size={40} className="text-primary inline" />
              <span className="text-center font-medium">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <Phone
                strokeWidth={2}
                size={40}
                className="text-primary inline"
              />
              <span className="text-center font-medium">
                {companyDetails.phone}
              </span>
            </Link>
          </div>
          <LeadForm />
        </div>
      </div>

      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
