import { experienceData } from "@/lib/data";
type ExpProps = typeof experienceData[number];

export default function ExperienceItem({ label, content, minorContent }: ExpProps) {
  return (
    <>
      <h3 className="font-bold uppercase">{label}</h3>
      <p className="!m-0 !font-extralight !text-[0.8rem]">{minorContent}</p>
      <ul className="flex flex-wrap gap-1">
        {content.map((item, index) => (
          <li className="bg-[#fcfcfc] dark:bg-gray-700 !text-[0.7rem] !m-0" key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
};
