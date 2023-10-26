import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    url: string;
    type: string;
    target?: string;
};

export default function Button({ children, url, type, target }: ButtonProps) {
    const primaryButtonClassName = "bg-gray-900 text-slate-50 px-7 py-3 hover:scale-[1.05]";
    const secondaryButtonClassName = "bg-white  text-gray-600 px-7 py-3 border border-black/10 hover:text-gray-950 hover:scale-[1.05]";
    const minorButtonClassName = "bg-white p-4 text-gray-600 text-[1.35rem]  hover:text-gray-950 hover:scale-[1.10]";
    return (
        <Link href={url} target={target}
            className={`${type === "primary" ? primaryButtonClassName
                : type === "secondary" ? secondaryButtonClassName
                    : minorButtonClassName}
            flex items-center justify-center gap-2 rounded-full focus:scale-110  active:scale-[1.05]cursor-pointer border border-black/5 w-full sm:w-auto`}
        >
            {children}
        </Link>
    )
}
