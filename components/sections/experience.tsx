"use client"
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
    </section>
  )
}
