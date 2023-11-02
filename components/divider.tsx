"use client";
import { motion } from "framer-motion";

export default function Divider() {
    const divDots = "bg-gray-300 h-2 my-2 rounded-full"
    return (
        <motion.div
            className="my-24 h-16 w-1 hidden sm:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className={divDots} />
            <div className={divDots} />
            <div className={divDots} />
        </motion.div>
    )
}
