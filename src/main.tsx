import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PodcastDetails, RouteError } from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    path: "/podcast/:podcastId",
    element: <PodcastDetails />,
    children: [
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <PodcastDetails />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
