"use client"
import { useThemeContext } from "@/context/theme-context";
import { useEffect } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const {theme, setTheme} = useThemeContext();

    const handleThemeChange = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);

    return (
        <button
            onClick={handleThemeChange}
            className="fixed flex-centered right-2 sm:right-10 bottom-5 z-[100]
            text-xl sm:text-2xl
            scale-[0.9] hover:scale-[1] active:scale-[.95] transition-all
            border border-opacity-40 border-[#fcfcfc] rounded-full
            bg-[#fcfcfc] bg-opacity-80 shadow-2xl
            w-[3rem] h-[3rem] dark:bg-gray-800">
            {theme === "light" ? <BsSun /> : <BsMoonStars />}
        </button>
    )
}
