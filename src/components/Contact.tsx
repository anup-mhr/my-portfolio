import { useState, type FormEvent } from "react";
import { Bio, EMAILJS } from "../data/constants";
import SectionHeading from "./SectionHeading";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const field =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-primary";
const label = "mb-1.5 block text-xs font-medium text-heading";

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

const channels = [
  { label: "Email", href: `mailto:${Bio.email}`, value: Bio.email },
  { label: "LinkedIn", href: Bio.linkedin, value: "in/anup-mhr" },
  { label: "GitHub", href: Bio.github, value: "@anup-mhr" },
  { label: "Instagram", href: Bio.insta, value: "@_anup_mhrzn" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if ((new FormData(form).get("website") as string)?.length) return;
    setStatus({ state: "sending" });
    try {
      await sendEmail(form);
      form.reset();
      setMessageLength(0);
      setStatus({ state: "sent" });
    } catch (error) {
      console.error("Contact form failed:", error);
      setStatus({
        state: "error",
        message: "The message couldn't be delivered right now. Please reach out on LinkedIn instead.",
      });
    }
  };

  const sending = status.state === "sending";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 overflow-hidden rounded-3xl bg-surface p-6 md:p-12 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col">
          <SectionHeading eyebrow="Contact" title="Let's talk" align="left">
            Have a project, an opportunity, or just want to say hi? Drop a message and I&apos;ll get
            back to you within a couple of days.
          </SectionHeading>

          <ul className="flex flex-col gap-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-bg px-5 py-4 ring-1 ring-line transition-colors hover:ring-primary"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted">{c.label}</span>
                    <span className="text-sm font-medium text-heading">{c.value}</span>
                  </span>
                  <span aria-hidden="true" className="text-muted transition-all group-hover:translate-x-1 group-hover:text-primary">
                    {"\u2192"}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-xs text-muted">
            <span className="size-2 rounded-full bg-green-500" />
            Based in Kathmandu, Nepal. Open to new opportunities.
          </p>
        </div>

        <div className="rounded-2xl bg-bg p-6 ring-1 ring-line md:p-8">
          {status.state === "sent" ? (
            <div role="status" className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-heading">Message sent</h3>
              <p className="max-w-xs text-sm text-muted">Thanks for reaching out. I&apos;ll reply to your email soon.</p>
              <button
                type="button"
                onClick={() => setStatus({ state: "idle" })}
                className="mt-2 text-sm font-medium text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
              <div>
                <label className={label} htmlFor="from_name">Name</label>
                <input id="from_name" name="from_name" className={field} required minLength={2} autoComplete="name" placeholder="Jane Doe" />
              </div>
              <div>
                <label className={label} htmlFor="from_email">Email</label>
                <input id="from_email" name="from_email" type="email" className={field} required autoComplete="email" placeholder="jane@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="subject">
                  Subject <span className="font-normal text-muted">(optional)</span>
                </label>
                <input id="subject" name="subject" className={field} placeholder="Project inquiry" />
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-baseline justify-between">
                  <label className={label} htmlFor="message">Message</label>
                  <span className="text-[11px] text-muted">{messageLength}/1000</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  className={`${field} resize-none`}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  placeholder="Tell me a little about what you have in mind..."
                  onChange={(e) => setMessageLength(e.target.value.length)}
                />
              </div>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {status.state === "error" && (
                <p role="alert" className="rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary sm:col-span-2">
                  {status.message}{" "}
                  <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="font-medium underline">
                    Open LinkedIn
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
              >
                {sending && (
                  <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                )}
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
