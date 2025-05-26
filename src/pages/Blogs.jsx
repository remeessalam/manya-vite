import React from "react";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const Blogs = () => {
  return (
    <div>
      {" "}
      <WebsiteHeader />
      <div className="container mx-auto px-4 pt-[7rem] pb-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-black">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {blog.desc.substring(0, 100)}...
              </p>
              <Link
                to={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>{" "}
      <WebsiteFooter />
    </div>
  );
};

export default Blogs;
