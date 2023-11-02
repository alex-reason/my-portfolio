import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import MinorHeading from "./minor-heading";

type SkillProps = typeof skillsData[number];

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skill({ title, details }: SkillProps) {
    return (
        <div className="mb-20 sm:my-2 mx-5 flex flex-col justify-start items-center">
            <MinorHeading>{title}</MinorHeading>
            <ul className="flex flex-wrap items-center justify-center gap-1">
                {details.map((item, index) => (
                    <motion.li
                        className="bg-[#fcfcfc] dark:bg-gray-800 border border-gray-200 p-2 rounded-md"
                        key={item}
                        variants={fadeInVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{
                            once: true,
                        }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </div>

    )
}
