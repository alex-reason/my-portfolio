import { skillsData } from "@/lib/data";

type SkillProps = typeof skillsData[number];

export default function Skill({ title, details }: SkillProps) {
    return (
        <div className="mb-20 sm:my-10 mx-5 flex flex-col justify-center items-center">
            <h3 className="font-medium uppercase text-lg mb-5">{title}</h3>
            <ul className="flex flex-wrap items-center justify-center gap-3">
                {details.map((item) => (
                    <li className="bg-gray-200 p-2 rounded-md" key={item}>{item}</li>
                ))}
            </ul>
        </div>

    )
}
