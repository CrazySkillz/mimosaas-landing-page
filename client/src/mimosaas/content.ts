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

export const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Create your client and campaign",
    description: "Set up a client workspace, add a campaign, and define its reporting context.",
  },
  {
    step: "2",
    title: "Connect Google Analytics",
    description: "Link the campaign's GA4 property and select the campaign values you want to track.",
  },
  {
    step: "3",
    title: "Analyze and act",
    description: "Monitor performance, set KPIs and Benchmarks, review Insights, and generate reports.",
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
