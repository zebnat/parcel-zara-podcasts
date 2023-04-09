import React, { ReactNode, useEffect, useState } from "react";
import { StatusIndicator } from "./StatusIndicator";
import { Link, useLocation } from "react-router-dom";
import { LoadingContext } from "../application/hooks/useLoadingContext";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout(props: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  const changeLoading = (v: boolean) => {
    console.log("change loading state");
    setLoading(v);
  };

  // when route changes, loading indicator always enabled
  useEffect(() => {
    changeLoading(true);
  }, [location]);

  return (
    <div className="bg-gray-100 text-black px-10 py-5 min-h-screen">
      <div className="w-full xl:w-3/4 m-auto flex flex-col">
        <header className="flex justify-between border-b-2 pb-2">
          <Link to="/" className="text-blue-500 saturate-50 text-2xl font-bold">
            Podcaster
          </Link>

          <StatusIndicator loading={loading} />
        </header>
        <LoadingContext.Provider
          value={{
            loading,
            setLoading: changeLoading,
          }}
        >
          <main className="my-10 grow">{props.children}</main>
        </LoadingContext.Provider>
        <footer>
          <Link
            to="/devnotes"
            className="font-bold text-blue-500 animate animate-pulse"
          >
            Notas del desarrollador
          </Link>
        </footer>
      </div>
    </div>
  );
}
