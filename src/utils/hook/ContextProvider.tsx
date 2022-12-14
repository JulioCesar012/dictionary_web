// @ts-nocheck
import { cloneElement } from "react";
import * as hooksProviders from "~/context";
import { ThemeProvider } from "~/styles";

const Providers = {
  ThemeProvider,
  ...hooksProviders,
};

const providers = Object.keys(Providers).reduce((acc, curr) => {
  if (!curr.includes("Provider")) return acc;
  const Component = Providers[curr];
  return [...acc, <Component key={`Context-key:${Math.random()}`} />];
}, []);

export const ContextProvider: any = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => cloneElement(parent, { children }),
    initial
  );
