import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    url: string;
    type: string;
    target?: string;
    ariaLabel: string;
    onClick?: () => void;
};

export default function Button({ children, url, type, target, onClick, ariaLabel }: ButtonProps) {
    const primaryButtonClassName = "bg-gray-800 text-gray-50 px-7 py-3 hover:scale-[1.05]";
    const secondaryButtonClassName = "bg-[#fcfcfc] text-gray-600 px-7 py-3 borderBlack hover:text-gray-950 hover:scale-[1.05]";
    const minorButtonClassName = "bg-[#fcfcfc] p-4 text-gray-600 text-[1.35rem]  hover:text-gray-950 hover:scale-[1.10]";
    return (
        <Link href={url} target={target}
            className={`${type === "primary" ? primaryButtonClassName
                : type === "secondary" ? secondaryButtonClassName
                    : minorButtonClassName}
            flex-centered gap-2 rounded-full focus:scale-110  active:scale-[1.05]cursor-pointer borderBlack w-full sm:w-auto`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    )
}
