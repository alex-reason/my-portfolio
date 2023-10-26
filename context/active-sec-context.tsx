"use client";
import { createContext, useState, useContext } from 'react';
import type { SectionName } from '@/lib/types';
type ContextChildrenProps = { children: React.ReactNode };

type ContextProviderProps = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClicked: number;
    setTimeLastClicked: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSecContext = createContext<ContextProviderProps | null>(null);

export default function ActiveSecContextProvider({ children }: ContextChildrenProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeLastClicked, setTimeLastClicked] = useState<number>(0);
    return (
        <ActiveSecContext.Provider value={{ activeSection, setActiveSection, timeLastClicked, setTimeLastClicked }}>
            {children}
        </ActiveSecContext.Provider>
    )
};

export function useActiveSecContext() {
    const context = useContext(ActiveSecContext);

    if (context === null) {
        throw new Error("useActiveSecContext must be used within an ActiveSecContextProvider")
    };

    return context;
};
