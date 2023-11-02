"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSecContext } from "@/context/active-sec-context";
import type { SectionName } from "@/lib/types";
import { navLinks } from "@/lib/data";

export default function Header() {
    const { activeSection, setActiveSection, setTimeLastClicked } = useActiveSecContext();
    const handleLink = (name: SectionName) => {
        setActiveSection(name);
        setTimeLastClicked(Date.now());
    };

    const containerClassName = "fixed top-0 sm:top-6 left-1/2 h-[5.5rem] sm:h-[3.25rem] w-full sm:w-[37rem] rounded-none border bg-[#fcfcfc] dark:bg-gray-800 border-[#fcfcfc] border-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full";
    const navClassName = "flex fixed w-[80%] sm:w-[initial] top-[0.15rem] left-1/2 h-14 -translate-x-1/2 py-2 sm:top-[1.9rem] sm:h-[initial] sm:py-0";
    const ulListClassName = "flex flex-wrap items-center justify-center gap-y-1 text-[.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5";
    const linkClassName = "flex w-full items-center justify-center px-3 py-2 dark:text-gray-200 hover:text-gray-950 sm:hover:bg-[#fdfbe3] sm:hover:dark:bg-gray-700 sm:hover:rounded-full";
    const activeLinkClassName = "underline underline-offset-4 sm:no-underline sm:bg-[#fffbd1] sm:dark:bg-gray-700 dark:text-[#fffbd1] text-gray-900 sm:rounded-full";

    return (
        <header className="z-[99] relative">
            <motion.div
                className={containerClassName}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
            </motion.div>
            <nav className={navClassName}>
                <ul className={ulListClassName}>
                    {navLinks.map(link => (
                        <motion.li
                            className="h-3/4 flex-centered"
                            key={link.name}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className={`${linkClassName} ${activeSection === link.name && activeLinkClassName}`}
                                onClick={() => handleLink(link.name)}
                            >
                                <span>{link.name}</span>
                                <motion.span
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                    className={`${activeSection === link.name ? activeLinkClassName : "bg-[#fcfcfc]"}`}
                                ></motion.span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};
