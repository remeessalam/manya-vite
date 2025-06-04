import {
  createBrowserRouter,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import AppLayout from "./Layout/AppLayout";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const TermsAndConditions = lazy(() => import("./pages/TermsandCondition"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      // <LoadingSpinner />
      <Suspense fallback={<LoadingSpinner />}>
        <SpinnerContextProvider>
          <LoadingSpinnerContext />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                zIndex: "10000",
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <AppLayout />
        </SpinnerContextProvider>
      </Suspense>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "services/:title",
        element: <ServiceDetails />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <SpinnerContextProvider>
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                zIndex: "10000",
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <LandingPage page={"web-development"} />
        </SpinnerContextProvider>
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <SpinnerContextProvider>
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                zIndex: "10000",
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <LandingPage page={"app-development"} />{" "}
        </SpinnerContextProvider>
      </Suspense>
    ),
  },
]);
export default AppRouter;
