'use client'

import {
  type ThemeProviderProps as NextThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from 'next-themes'

type ThemeProviderProps = Omit<NextThemeProviderProps, 'children'> & {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
