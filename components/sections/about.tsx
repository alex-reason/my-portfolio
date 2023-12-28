"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";

export default function About() {
    const { ref } = useSectionInView("About", { threshold: 0.75 })
    const pClassName = "mb-4 text-sm sm:text-lg !leading-8";
    const aboutSecClassName = "flex flex-col items-center max-w-[35rem] mx-12 sm:mx-auto text-center font-normal";

    return (
        <motion.section
            className={aboutSecClassName}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
        >
            <SectionHeading>about me</SectionHeading>
            <p className={pClassName}>
                I like to develop websites using <span className="font-medium">React, JS, Next.js, and SASS.</span> I have several certifications in <span className="font-bold">front-end web development, UI/UX, Responsive Web design, and Modern React.</span>
            </p>
            <p className={pClassName}>
                I love learning foreign and coding languages. I am <span className="font-medium"> fluent in</span><span className="font-bold"> English and Tagalog </span>(Filipino), and I have upper-intermediate <span className="font-medium"> proficiency in </span><span className="font-bold">French and Japanese.</span> I am hoping to learn more languages!
            </p>
            <p className={pClassName}>
                Aside from coding, I enjoy researching about the multifaceted value of <span className="font-bold">biodiversity and sustainability.</span> My graduate thesis was on Marine and Coastal Resource management and Norm Localization of biodiversity management.
            </p>
        </motion.section>
    )
}
