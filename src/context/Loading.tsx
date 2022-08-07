import { FC, createContext, useContext, useState, useEffect } from "react";
import { ILoadingContext } from "~/utils";

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);

type Loading = {
    children: React.ReactNode;
}

export const LoadingProvider: FC = ({ children }: Loading) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [loading]);

  const value = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export function useLoading(): ILoadingContext {
  return useContext(LoadingContext);
}
