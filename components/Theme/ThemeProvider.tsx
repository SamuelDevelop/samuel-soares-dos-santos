'use client'

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <NextThemesProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            storageKey="theme-mode"
            disableTransitionOnChange
            themes={['light', 'dark']}
        >
            {children}
        </NextThemesProvider>
    );
}

export function useTheme() {
    const { theme, resolvedTheme, setTheme } = useNextTheme();

    return {
        theme: resolvedTheme ?? theme ?? "dark",
        setTheme,
    };
}