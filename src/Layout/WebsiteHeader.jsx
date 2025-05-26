import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoImg } from "../constant";
import { X } from "lucide-react";
// import { Helmet } from "react-helmet";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const { pathname } = useLocation();
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true); // scrolling up
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/blogs",
      name: "Blogs",
    },
    {
      path: "/contact-us",
      name: "Contact Us",
    },
  ];

  return (
    <div
      className={`py-4 fixed top-0 w-full bg-secondary/60 backdrop-blur-md z-50 text-white transition-transform duration-700 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          {/* <Helmet>
            <link
              rel="preload"
              href={logoImg}
              as="image"
              type="image/webp"
              // crossorigin="anonymous"
            />
          </Helmet> */}
          <Link
            aria-label="Home"
            // smooth={true}
            to="/"
            className="cursor-pointer"
          >
            <img
              // loading="lazy"
              src={logoImg}
              width="150"
              height="100"
              className="h-[2.50rem] md:h-[3.75rem] md:scale-125 object-contain"
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {routes
              .filter((option) => option.name !== "Contact Us")
              .map((option) => (
                <Link
                  to={`${option.path}`}
                  className={`text-sm link ${
                    option.path === pathname && "text-primary font-medium"
                  }`}
                  key={option.path}
                  aria-label={`Navigate to ${option.name} page`}
                >
                  {option.name}
                </Link>
              ))}
            <Link
              to="/contact-us"
              className="primary-btn"
              // spy={true}
              // smooth={true}
              offset={-60}
              duration={1000}
              aria-label={`Navigate to Contact page`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <X size={35} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={name}
                className="sm:text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
                aria-label={`Navigate to ${name} page`}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default WebsiteHeader;
