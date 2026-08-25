/** MimoSaaS brand colors — from Marketing Analytics Overview (orange PDF) */

export const MIMOSAAS_COLORS = {
  bgMain: "#fff8f3",
  bgCard: "#ffffff",
  bgHero: "#fff4e5",
  textMain: "#241306",
  textSubtle: "#8b7357",
  accent: "#ea580c",
  accentSoft: "rgba(234, 88, 12, 0.14)",
  borderSoft: "#fed7aa",
} as const;

export const MIMOSAAS_NAV = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#integrations", label: "Integrations" },
] as const;

export const VALUE_PROPS = [
  {
    title: "See every channel in one place",
    description:
      "Connect paid social, search, and analytics. Stop exporting CSVs and stitching reports by hand.",
  },
  {
    title: "Built for multi-client agencies",
    description:
      "Separate workspaces per client, roll up agency-wide performance, and keep data scoped correctly.",
  },
  {
    title: "Reports clients actually read",
    description:
      "Clean overviews with spend, revenue, ROAS, and funnel metrics — ready for weekly check-ins and QBRs.",
  },
  {
    title: "Alerts before problems escalate",
    description:
      "Get notified when CPL drifts, pacing slips, or a connector needs attention — not after the client calls.",
  },
  {
    title: "Funnel clarity, not vanity metrics",
    description:
      "Track the path from impression to customer so you can explain what's working and what to fix.",
  },
  {
    title: "Secure, OAuth-based connections",
    description:
      "Link ad platforms and analytics with standard auth. Your credentials stay where they belong.",
  },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Connect your stack",
    description: "Link Meta, Google Ads, LinkedIn, GA4, and your CRM in a few clicks.",
  },
  {
    step: "2",
    title: "Set up client workspaces",
    description: "Create a workspace per account, map campaigns, and invite your team.",
  },
  {
    step: "3",
    title: "Deliver insights that win retainers",
    description: "Share live dashboards, scheduled reports, and proactive alerts with clients.",
  },
] as const;

export const INTEGRATIONS = [
  "Meta Ads",
  "Google Ads",
  "LinkedIn Ads",
  "TikTok",
  "Google Analytics 4",
  "Google Sheets",
  "Shopify",
  "Salesforce",
  "HubSpot",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We replaced three spreadsheets and a Friday-night reporting ritual. Clients get clearer numbers, and we save hours every week.",
    role: "Performance Director",
    company: "Growth agency, UK",
  },
  {
    quote:
      "Finally one place to see pacing, ROAS, and funnel drop-off across accounts — without logging into five ad managers.",
    role: "Head of Paid Media",
    company: "B2B agency",
  },
] as const;
