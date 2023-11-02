import Link from "next/link";
import Image from "next/image";
import { certData } from "@/lib/data";

type CertProps = typeof certData[number];

export default function Certificate({ title, url, detail, icon }: CertProps) {
  const containerClassName = "flex flex-col mx-3 my-1 sm:justify-start rounded-xl w-[auto] sm:w-[16rem] min-h-[6rem] sm:h-[8rem] bg-[#fcfcfc] dark:bg-gray-800 hover:-translate-y-1";
  const shadowClassName = "shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]";
  const titleContainerClassName = "flex justify-between items-center rounded-lg bg-gray-700 text-gray-50 py-1 px-3 sm:p-3";

  return (
    <Link href={url} className={`${shadowClassName} ${containerClassName}`} target="_blank">
      <div className={`${titleContainerClassName} ${shadowClassName}`}>
        <h3 className="font-bold text-[.9rem] sm:text-[1rem]">{title}</h3>
        <Image src={icon} className="w-[4rem] sm:w-[5rem] h-[3rem] rounded-full px-2 object-cover object-left" alt="illustations from blush" />
      </div>
      <p className="text-xs font-medium px-3 py-2">{detail}</p>
    </Link>
  )
};
