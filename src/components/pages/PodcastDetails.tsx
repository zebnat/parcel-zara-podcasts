import React from "react";
import { Layout } from "../Layout";
import { Outlet, Link } from "react-router-dom";

export function PodcastDetails() {
  return (
    <Layout>
      <p>Podcast details page here</p>
      <p>PODCAST SUMMARY HERE</p>
      <Link to="/podcast/74927349237/episode/43827943">Episode 43827943</Link>
      <Link to="/podcast/74927349237/episode/123213">Episode 123213</Link>
      <Outlet />
    </Layout>
  );
}
