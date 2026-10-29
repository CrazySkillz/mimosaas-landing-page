import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { MIMOSAAS_COLORS } from "./content";

const EARLY_ACCESS_ENDPOINT = import.meta.env.VITE_EARLY_ACCESS_ENDPOINT
  || "https://marketforensics.onrender.com/api/early-access";

export function EarlyAccessButton({ children, ...buttonProps }: ButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const emailId = useId();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    setOpen(false);
    setEmail("");
    setWebsite("");
    setError("");
    setSubmitted(false);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch(EARLY_ACCESS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message || "We could not submit your request. Please try again.");
      }
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button type="button" {...buttonProps} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[calc(100%-2rem)] max-w-md rounded-2xl border p-0 shadow-2xl backdrop:bg-black/40"
        style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgMain }}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            aria-label="Close early access form"
            className="absolute right-4 top-4 rounded-md p-2 transition-colors hover:bg-orange-100"
            onClick={close}
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="py-5 text-center" aria-live="polite">
              <CheckCircle2 className="mx-auto h-12 w-12" style={{ color: MIMOSAAS_COLORS.accent }} />
              <h2 id={titleId} className="mt-4 text-2xl font-bold">Thanks for joining us!</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                We&apos;ll let you know when mimosaas officially launches.
              </p>
              <Button type="button" className="mt-6 text-white" style={{ background: MIMOSAAS_COLORS.accent }} onClick={close}>
                Done
              </Button>
            </div>
          ) : (
            <>
              <h2 id={titleId} className="pr-10 text-2xl font-bold">Great to see you!</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                We&apos;re preparing to go live. Enter your email below to receive notifications about our official launch.
              </p>
              <form className="mt-6" onSubmit={submit}>
                <label htmlFor={emailId} className="text-sm font-semibold">Email address</label>
                <input
                  id={emailId}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="mt-2 h-11 w-full rounded-md border bg-white px-3 text-sm outline-none transition-shadow focus:ring-2"
                  style={{ borderColor: MIMOSAAS_COLORS.borderSoft, outlineColor: MIMOSAAS_COLORS.accent }}
                />
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />
                {error && <p className="mt-2 text-sm text-red-700" role="alert">{error}</p>}
                <Button
                  type="submit"
                  className="mt-4 w-full text-white"
                  style={{ background: MIMOSAAS_COLORS.accent }}
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Notify me at launch"}
                </Button>
                <p className="mt-3 text-center text-xs" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                  Launch updates only. See our <a href="/privacy" className="font-medium underline">Privacy Policy</a>.
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
