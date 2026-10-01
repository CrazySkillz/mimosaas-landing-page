import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MIMOSAAS_COLORS } from "./content";
import logoSrc from "./assets/logo_fff8f3_bg_orange_fill.jpg";

function MimoSaaSLogo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="mimosaas"
      className={`${className} w-auto object-contain`}
    />
  );
}

export default function MimoSaaSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: MIMOSAAS_COLORS.bgMain, color: MIMOSAAS_COLORS.textMain }}
    >
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: MIMOSAAS_COLORS.borderSoft,
          background: "rgba(255, 248, 243, 0.92)",
        }}
      >
        <div className="mx-auto flex h-32 sm:h-36 max-w-6xl items-center px-4 sm:px-6">
          <Link href="/" className="flex items-center no-underline">
            <MimoSaaSLogo className="h-24 sm:h-28" />
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t" style={{ borderColor: MIMOSAAS_COLORS.borderSoft, background: MIMOSAAS_COLORS.bgCard }}>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2">
              <MimoSaaSLogo className="h-20 sm:h-24" />
              <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                Marketing analytics for growth agencies — unified reporting, client workspaces, and proactive alerts.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Get started</h4>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MIMOSAAS_COLORS.textSubtle }}>
                Connect your channels, onboard client workspaces, and see blended performance in minutes.
              </p>
              <a href="https://marketforensics.onrender.com/sign-in" className="inline-block mt-4 no-underline">
                <Button size="sm" className="text-white" style={{ background: MIMOSAAS_COLORS.accent }}>
                  Get early access
                </Button>
              </a>
            </div>
          </div>
          <div
            className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs sm:flex-row"
            style={{ borderColor: MIMOSAAS_COLORS.borderSoft, color: MIMOSAAS_COLORS.textSubtle }}
          >
            <p>© {new Date().getFullYear()} mimosaas. Marketing analytics overview for agencies.</p>
            <Link href="/privacy" className="font-medium no-underline hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
