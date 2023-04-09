import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PodcastDetails, RouteError } from "./components/pages";
import { DevNotes } from "./components/pages/DevNotes";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <RouteError />,
  },
  {
    path: "/podcast/:podcastId",
    element: (
      <Layout>
        <PodcastDetails />
      </Layout>
    ),
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: (
      <Layout>
        <PodcastDetails />
      </Layout>
    ),
  },
  {
    path: "/devnotes",
    element: (
      <Layout>
        <DevNotes />
      </Layout>
    ),
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);
