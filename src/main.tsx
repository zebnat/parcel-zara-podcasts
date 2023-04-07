import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PodcastDetails, RouteError } from "./components/pages";
import { DevNotes } from "./components/pages/DevNotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    path: "/podcast/:podcastId",
    element: <PodcastDetails />,
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <PodcastDetails />,
  },
  {
    path: "/devnotes",
    element: <DevNotes />,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);
