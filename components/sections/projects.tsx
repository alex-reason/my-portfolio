"use client"
import React from "react";
import SectionHeading from "../section-heading";
import Project from "../project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <section id="projects" ref={ref}>
            <SectionHeading>My Projects</SectionHeading>
            {projectsData && projectsData.map((proj) => (
                <div className="flex flex-col items-center gap-2" key={proj.id}>
                    <Project {...proj} />
                    {proj.code.length > 0 && <Link className="bg-gray-700 px-8 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full w-auto" href={proj.code}>Code</Link>}
                </div>
            ))}
        </section>
    );
};
