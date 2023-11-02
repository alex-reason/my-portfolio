"use client"
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Certificate from "../certificate";
import SectionHeading from "../section-heading";
import ExperienceItem from "../experience-item";
import { useSectionInView } from "@/lib/hooks";
import { certData, experienceData } from "@/lib/data";
import { useThemeContext } from "@/context/theme-context";

export default function Competencies() {
  const { ref } = useSectionInView("Competencies");
  const { theme } = useThemeContext();
  let colorContainer = (theme === "light" ? "#F2f4f6" : "#1f2937");

  return (
    <section id="competencies" ref={ref}>
      <div className="mb-28 flex flex-col items-center">
        <SectionHeading>Certifications</SectionHeading>
        <ul className="flex flex-col sm:flex-row flex-wrap max-w-[80rem] sm:max-w-[60rem] margin-auto justify-center gap-1 sm:gap-3">
          {certData.map(cert => (
            <li key={cert.id} className="group"><Certificate {...cert} /></li>
          ))}
        </ul>
      </div>

      <div className="text-gray-700 dark:text-gray-200">
        <SectionHeading>Work History</SectionHeading>
        <VerticalTimeline lineColor="" animate={true}>
          {experienceData.map((exp, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                date={exp.date}
                contentStyle={{
                  backgroundColor: colorContainer,
                  border: "1px solid rbga(0, 0, 0, 0.05)",
                  padding: "1.3rem",
                  boxShadow: "none",
                  borderRadius: "10px"
                }}
                contentArrowStyle={{
                  borderRight: ".4rem solid #9ca3af"
                }}
                icon={exp.icon}
                iconStyle={{
                  background: colorContainer,
                  fontSize: "1.5rem"
                }}
                visible={true}
              >
                <ExperienceItem {...exp} />
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}
