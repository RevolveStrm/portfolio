"use client";

import { Provider } from "jotai";
import type React from "react";

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
