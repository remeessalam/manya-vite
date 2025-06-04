import { createRoot } from "react-dom/client";
import "./index.css";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./App.jsx";
import SpinnerContextProvider from "./components/SpinnerContext.jsx";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
