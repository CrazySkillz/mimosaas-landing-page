import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MimoSaaSLayout from "./layout";
import MimoSaaSProductVisual from "./product-visual";
import {
  INTEGRATIONS,
  MIMOSAAS_COLORS,
  TESTIMONIALS,
  VALUE_PROPS,
  WORKFLOW_STEPS,
} from "./content";

export default function MimoSaaSHome() {
  return (
    <MimoSaaSLayout>
      <section
        className="relative overflow-hidden border-b"
        style={{
          borderColor: MIMOSAAS_COLORS.borderSoft,
          background: `linear-gradient(180deg, ${MIMOSAAS_COLORS.bgHero} 0%, ${MIMOSAAS_COLORS.bgMain} 70%)`,
        }}
      >
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: MIMOSAAS_COLORS.borderSoft,
                  background: MIMOSAAS_COLORS.accentSoft,
                  color: MIMOSAAS_COLORS.accent,
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                For growth & performance agencies
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
                Marketing analytics your clients will trust
              </h1>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                MimoSaaS unifies ad spend, revenue, and funnel data across every client and channel — so your team
                spends less time reporting and more time improving performance.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#features">
                  <Button
                    size="lg"
                    className="gap-2 px-8 text-white no-underline border-0 w-full sm:w-auto"
                    style={{ background: MIMOSAAS_COLORS.accent }}
                  >
                    Get early access
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="no-underline w-full sm:w-auto"
                    style={{ borderColor: MIMOSAAS_COLORS.borderSoft, color: MIMOSAAS_COLORS.textMain }}
                  >
                    See how it works
                  </Button>
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-sm" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                {["No credit card required", "Set up in under an hour", "Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: MIMOSAAS_COLORS.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <MimoSaaSProductVisual />
          </div>
        </div>
      </section>

      <section
        className="border-b py-8"
        style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgCard }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-medium" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
            Trusted by performance teams managing paid media across retail, SaaS, finance, and e‑commerce
          </p>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Everything you need to run a modern agency</h2>
            <p className="mt-4 leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
              One platform for cross-channel reporting, client workspaces, and the alerts that keep accounts on track.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
                style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgCard }}
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y py-20"
        style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgHero }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">Up and running in three steps</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {WORKFLOW_STEPS.map((s) => (
              <div key={s.step} className="text-center md:text-left">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold text-white md:mx-0"
                  style={{ background: MIMOSAAS_COLORS.accent }}
                >
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">What agency teams say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.quote}
                className="rounded-2xl border p-8 shadow-sm"
                style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgCard }}
              >
                <p className="text-base leading-relaxed italic" style={{ color: MIMOSAAS_COLORS.textMain }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                  <span className="font-medium text-[#241306]">{t.role}</span>
                  <span className="mx-1">·</span>
                  {t.company}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="integrations"
        className="border-y py-20"
        style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgCard }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold">Works with your existing stack</h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
            Connect the platforms you already use — ad managers, analytics, CRM, and exports.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgMain }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: MIMOSAAS_COLORS.textMain, color: "#fff8f3" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to win more retainers with better reporting?</h2>
          <p className="mt-4 text-orange-100/90 leading-relaxed">
            Join agencies using MimoSaaS to deliver clearer insights, faster — across every client and channel.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#features" className="no-underline">
              <Button
                size="lg"
                className="gap-2 px-8 text-white border-0"
                style={{ background: MIMOSAAS_COLORS.accent }}
              >
                Get early access
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works" className="no-underline">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300/50 text-orange-50 hover:bg-orange-950/30"
              >
                See how it works
              </Button>
            </a>
          </div>
        </div>
      </section>
    </MimoSaaSLayout>
  );
}
