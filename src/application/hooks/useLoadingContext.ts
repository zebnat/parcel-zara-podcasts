import React, { useContext } from "react";

export const LoadingContext = React.createContext({
  loading: false,
  setLoading: (v: boolean) => {},
});

export const useLoadingContext = () => useContext(LoadingContext);
