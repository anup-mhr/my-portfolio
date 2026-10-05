import { useEffect, useState, type FormEvent } from "react";
import { EMAILJS } from "../data/constants";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-md border border-line bg-bg px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary";

async function sendEmail(form: HTMLFormElement) {
  const data = new FormData(form);
  data.append("service_id", EMAILJS.serviceId);
  data.append("template_id", EMAILJS.templateId);
  data.append("user_id", EMAILJS.publicKey);
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    method: "POST",
    body: data,
  });
  if (!res.ok) throw new Error(await res.text());
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "sent" && status !== "error") return;
    const id = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(id);
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await sendEmail(form);
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading title="Let's talk">
        Have a project, an opportunity or just want to say hi? My inbox is open.
      </SectionHeading>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="from_name">Name</label>
        <input id="from_name" className={input} required placeholder="Your name" name="from_name" />
        <label className="sr-only" htmlFor="from_email">Email</label>
        <input id="from_email" className={input} type="email" required placeholder="Your email" name="from_email" />
        <label className="sr-only" htmlFor="subject">Subject</label>
        <input id="subject" className={`${input} sm:col-span-2`} placeholder="Subject" name="subject" />
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea id="message" className={`${input} sm:col-span-2`} required placeholder="Message" rows={5} name="message" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="justify-self-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>

      {(status === "sent" || status === "error") && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-fg px-4 py-3 text-sm text-white shadow-lg"
        >
          {status === "sent" ? "Message sent. Thank you!" : "Something went wrong. Please try again."}
        </div>
      )}
    </section>
  );
}
