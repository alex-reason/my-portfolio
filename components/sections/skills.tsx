"use client"
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import Skill from "../skill";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="max-w-[60rem]">
      <SectionHeading>Skills</SectionHeading>
      <div className="sm:grid sm:grid-cols-2 sm:gap-3">
        {skillsData.map((item, index) => (
          <React.Fragment key={index}>
            <Skill {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
};
