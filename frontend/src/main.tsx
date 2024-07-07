import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import { preloadImages } from "@/utils/preload";
import { initBackgroundShader } from "@/utils/shader";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about?",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

preloadImages().catch((error) =>
  console.error("Failed to preload images", error)
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

initBackgroundShader(
  document.getElementById("background") as HTMLCanvasElement
);
