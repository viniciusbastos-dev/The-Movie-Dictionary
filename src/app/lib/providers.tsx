"use client";

import React from "react";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import theme from "../ui/styles/theme";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
