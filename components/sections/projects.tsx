"use client"
import React from "react";
import SectionHeading from "../section-heading";
import Project from "../project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <section id="projects" ref={ref}>
            <SectionHeading>My Projects</SectionHeading>
            {projectsData && projectsData.map((proj) => (
                <React.Fragment key={proj.id}>
                    <Project {...proj} />
                </React.Fragment >
            ))}
        </section>
    );
};
