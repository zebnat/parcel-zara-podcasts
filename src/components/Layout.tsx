import React, { ReactNode } from "react";
import { StatusIndicator } from "./StatusIndicator";
import { Link } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div className="bg-gray-100 text-black px-10 py-5 min-h-screen">
      <div className="w-full xl:w-3/4 m-auto flex flex-col">
        <header className="flex justify-between border-b-2 pb-2">
          <Link to="/" className="text-blue-500 saturate-50 text-2xl font-bold">
            Podcaster
          </Link>
          <StatusIndicator loading={true} />
        </header>
        <main className="my-10 grow">{props.children}</main>
        <footer>By Daniel DR</footer>
      </div>
    </div>
  );
}
