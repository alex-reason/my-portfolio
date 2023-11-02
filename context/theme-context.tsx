"use client";
import { createContext, useState, useContext } from "react";

type Theme = "light" | "dark"
type ContextChildrenProps = { children: React.ReactNode };

type ContextProviderProps = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ContextProviderProps | null>(null);


export default function ThemeContextProvider({ children }: ContextChildrenProps) {
    const [theme, setTheme] = useState<Theme>("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useThemeContext must be used within an ThemeContextProvider")
    };

    return context;
};
