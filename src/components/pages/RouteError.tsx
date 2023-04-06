import React from "react";
import { useRouteError } from "react-router-dom";
import { Layout } from "../Layout";
export function RouteError() {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <Layout>
      <p className="text-2xl text-center my-10">
        Oh no! Something went wrong here!
      </p>
      <p className="text-3xl font-bold flex flex-col items-center justify-center p-4 bg-red-200 h-[500px]">
        <span>Type: {error.statusText}</span>
        {error.statusText && <span>{error.message}</span>}
      </p>
    </Layout>
  );
}
