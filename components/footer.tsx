import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="text-center flex flex-col items-center justify-center m-auto p-4 w-[80%] text-gray-600 dark:text-gray-400">
            <small>
                &copy; 2023 Alexandra. All Rights Reserved.
            </small>
            <div className="flex gap-2 underline text-[.8rem] mb-2">
                <Link href="https://www.linkedin.com/in/alexandra-reasonda" target="_blank">
                    LinkedIn
                </Link>
                <Link href="https://github.com/alex-reason" target="_blank">
                    Github
                </Link>
                <Link href="https://profile.indeed.com/p/alexandrar-mje63u7">Indeed</Link>
            </div>

            <p className="font-medium text-[0.6rem]">
                Site Built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email, Resend, Vercel hosting, & more.
            </p>
        </footer>
    )
}
