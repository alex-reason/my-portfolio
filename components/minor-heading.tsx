import type { HeadingProps } from "@/lib/types";

export default function MinorHeading({children}: HeadingProps) {
    return (
        <h3 className="font-medium uppercase text-lg mb-3">{children}</h3>
    )
}
