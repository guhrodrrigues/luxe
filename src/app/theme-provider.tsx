"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from "next-themes";

type ThemeProviderProps = Omit<NextThemeProviderProps, "children"> & {
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
