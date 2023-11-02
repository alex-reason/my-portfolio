"use server";
import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/lib/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleSendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid email"
    }
  };

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "invalid message"
    }
  };

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "momai.reason@gmail.com",
      reply_to: senderEmail as string,
      subject: `Message via contact form `,
      react: React.createElement(ContactFormEmail, {
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string
      }),
    });
  } catch (error: unknown) {
    console.log(error)
  }
  return {
    data
  }
};