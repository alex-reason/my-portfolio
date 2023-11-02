"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { handleSendEmail } from "@/actions/handleSendEmail";
import illustration from "@/lib/keep-in-touch.png";
import SectionHeading from "@/components/section-heading"
import SubmitButton from "@/components/submit-button"

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const sectionClassName = "mb-20 w-[min(100%,38rem)] flex flex-col items-center";
  const inputClassName = "borderBlack rounded-md dark:outline-none dark:bg-gray-50 dark:bg-opacity-95 dark:focus:bg-opacity-100 transition-all";

  return (
    <motion.section id="contact" className={sectionClassName} ref={ref}
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}

      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <Image className="h-[5rem] sm:h-20 w-auto -mt-4" src={illustration} alt="from blush" />
      <p className="my-2">
        Reach me directly via <a className="hover:underline font-bold" href="mailto:alexreasonda@gmail.com"> email</a> or via the form below:
      </p>

      <form
        className="flex flex-col gap-2 w-[100%] mt-5 dark:text-gray-800"
        action={async (formData) => {
          const { data } = await handleSendEmail(formData);
          if (!data || !data.id) {
            toast.error("something went wrong");
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className={`${inputClassName} h-10 px-4`}
          placeholder="email address"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className={`${inputClassName} h-[12rem] my-1 p-4`}
          placeholder="your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
};
