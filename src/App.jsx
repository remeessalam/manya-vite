import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import ServiceDetails from "./pages/ServiceDetails";
import TermsAndConditions from "./pages/TermsandCondition";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));

AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-in-out-quart",
  throttleDelay: 200,
});

function App() {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: <Home />,
    },
    {
      path: "/about-us",
      name: "About Us",
      element: <AboutUs />,
    },
    {
      path: "/services",
      name: "Services",
      element: <Services />,
    },
    {
      path: "/blogs",
      name: "Blogs",
      element: <Blogs />,
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      element: <ContactUs />,
    },
  ];
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SpinnerContextProvider>
        <Router>
          <LoadingSpinnerContext />
          <WhatsAppIcon />
          <ScrollToTop />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            {/* Website pages */}
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
            <Route path="services/:title" element={<ServiceDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            {/* Landing pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
        </Router>
      </SpinnerContextProvider>
    </Suspense>
  );
}

export default App;
