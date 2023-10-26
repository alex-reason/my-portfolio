"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = typeof projectsData[number];

export default function Project({ url, title, tags, imageUrl, description }: ProjectProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    const containerClassName = "flex flex-col relative group bg-gray-100 max-w-[45rem] border border-black/5 rounded-md overflow-hidden px-2 mb-3 sm:mb-8 last:mb-0 sm:pr-8 sm:h-[20rem] sm:even:pl-8 hover:bg-[#fdfbe3] hover:border-none transition";
    const tagsClassName = "bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full";
    const textContainerClassName = "flex flex-col py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]";
    const imageUniformClassName = "m-auto sm:absolute sm:top-[5.5rem] sm:-right-[8rem] w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] sm:group-hover:-translate-y-2";

    return (
        <motion.a href={url} target="_blank" className={containerClassName} ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}>
            <div className={textContainerClassName}>
                <h3 className="font-medium capitalize">{title}</h3>
                <p className="text-xs leading-relaxed mt-2 mb-6">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                    {tags && tags.map((tag, index) => (
                        <li className={tagsClassName} key={`${title} ${index}`}>{tag}</li>
                    ))}
                </ul>
            </div>

            <Image
                src={imageUrl}
                alt={title}
                className={`${imageUniformClassName}
                sm:group-even:right-[23rem] sm:group-even:-left-40
                sm:group-even:group-hover:rotate-2 sm:group-even:group-hover:translate-x-3
                sm:group-odd:group-hover:-rotate-2
                sm:group-odd:group-hover:-translate-x-3
               `}
                quality={95}
            />
        </motion.a>
    );
};
