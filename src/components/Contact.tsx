import { useEffect, useState, type FormEvent } from "react";
import { EMAILJS } from "../data/constants";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "flex-1 rounded-xl border border-muted bg-transparent px-4 py-3 text-lg text-fg outline-none focus:border-primary";

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
    <section className="relative z-[1] flex flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[1350px] flex-col items-center justify-between gap-3 px-4 pb-20">
        <SectionHeading title="Contact">
          Feel free to reach out to me for any questions or opportunities!
        </SectionHeading>
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex w-[95%] max-w-[600px] flex-col gap-3 rounded-2xl bg-card p-8 shadow-glow"
        >
          <h3 className="mb-1.5 text-2xl font-semibold">Email Me 🚀</h3>
          <input className={input} type="email" required placeholder="Your Email" name="from_email" />
          <input className={input} required placeholder="Your Name" name="from_name" />
          <input className={input} placeholder="Subject" name="subject" />
          <textarea className={input} required placeholder="Message" rows={4} name="message" />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-gradient mt-0.5 w-full cursor-pointer rounded-xl px-4 py-[13px] text-center text-lg font-semibold text-fg disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
      </div>

      {(status === "sent" || status === "error") && (
        <div
          role="status"
          className="fixed bottom-6 left-6 z-50 rounded bg-[#323232] px-4 py-3 text-sm text-white shadow-lg"
        >
          {status === "sent"
            ? "Email sent successfully!"
            : "Something went wrong. Please try again."}
        </div>
      )}
    </section>
  );
}
