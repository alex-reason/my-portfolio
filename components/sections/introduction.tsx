"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useActiveSecContext } from "@/context/active-sec-context";
import { useSectionInView } from "@/lib/hooks";
import type { SectionName } from "@/lib/types";
import Button from "@/components/button";


export default function Introduction() {
    const { ref } = useSectionInView("Home");
    const { setActiveSection, setTimeLastClicked } = useActiveSecContext();
    const handleLink = (name: SectionName) => {
        setActiveSection(name);
        setTimeLastClicked(Date.now());
    };

    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 z-[90]" id="home" ref={ref}>
            <div className="flex flex-col items-center justify-center">
               
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Image
                        src="https://source.unsplash.com/YdAqiUkUoWA"
                        alt="flower from unsplash" width="100"
                        height="100"
                        quality="95"
                        className="h-24 w-24 rounded-full border-white object-cover"
                    />
                </motion.div>

                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-light !leading-[1.5] text-center sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Hello, I&apos;m{" "}
                    <span className="font-bold">Alexandra.</span>{" "}
                    <span className="font-extrabold block">Frontend web developer and designer.</span>{" "}
                    <span>I create sites and apps with</span>{" "}
                    <span className="underline cursor-pointer"><a href="#skills">React, Next.js, typescript, and more.</a></span>
                </motion.h1>

                <motion.div
                    className="flex flex-col gap-2 sm:flex-row w-full items-center justify-center px-4 font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Button
                        url="#contact"
                        type="primary"
                        onClick={() => handleLink("Contact")}
                        ariaLabel="go to contact form"
                    >
                        Contact me
                    </Button>

                    <Button
                        url="https://www.linkedin.com/in/alexandra-reasonda/"
                        type="minor"
                        target="_blank"
                        ariaLabel="new tab to my linkedin page"
                    >
                        <FaLinkedin />
                    </Button>

                    <Button
                        url="https://github.com/alex-reason"
                        type="minor"
                        target="_blank"
                        ariaLabel="new tab to my github page"
                    >
                        <FaGithubSquare />
                    </Button>
                </motion.div>

            </div>
        </section>
    )
}
