import type { HeadingProps } from "@/lib/types"

export default function SectionHeading({ children }: HeadingProps) {
    return (
        <h2 className="text-3xl mb-8 font-bold capitalize text-center">{children}</h2>
    )
};
