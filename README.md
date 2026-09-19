<div align="center">

# VyapaarMitra V2

### A mobile-first fintech prototype that helps Indian MSMEs understand credit readiness and access working capital.

![Status](https://img.shields.io/badge/Status-Interactive_prototype-2563EB)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

</div>

## Product idea

Small businesses often have real cash flow but limited clarity about how lenders assess them. VyapaarMitra explores a friendlier credit journey that turns business data—such as bank activity, GST health, invoices, and purchase orders—into understandable eligibility, coaching, and a working-capital offer.

V2 expands the original prototype beyond the loan funnel into an ongoing financial companion.

## What you can explore

- Mobile-number onboarding and business-detail capture
- Account Aggregator consent walkthrough
- Credit limit, available balance, score, and business-health dashboard
- A working-capital application with amount, tenure, and EMI calculation
- Credit summary, offer review, simulated disbursal, and repayment schedule
- Business analytics and data-strength indicators
- Credit Coach with score factors and improvement actions
- Growth Insights linking business signals to potential opportunities
- Rewards tiers, MitraCoins, settings, and persistent bottom navigation
- **Skip to demo** path for quickly exploring the product

## User journey

```text
Onboard → Connect business data → Understand credit profile
   → Choose working capital → Review offer → Simulated success
   → Track repayment, growth, coaching, and rewards
```

## What's new in V2

Compared with [the original VyapaarMitra prototype](https://github.com/nikhilkoyyada7868/VyapaarMitra), V2 adds a direct demo entry, bottom navigation, more-data connections, credit coaching, growth insights, and a richer rewards-tier experience.

## Tech stack

- React 18 and TypeScript
- Vite with the React SWC plugin
- Radix UI primitives and reusable component patterns
- Motion for transitions and micro-interactions
- Recharts for visual analytics
- Lucide icons and utility-first styling

## Run locally

```bash
git clone https://github.com/nikhilkoyyada7868/VM2.git
cd VM2
npm install
npm run dev
```

Build the static bundle with:

```bash
npm run build
```

## Prototype boundaries

This is an interactive UX prototype using in-memory sample data. OTP verification, KYC, Account Aggregator consent, GST/bank connections, underwriting, credit scores, loan offers, payments, rewards, and disbursal are simulated. It should not be interpreted as a lending product, eligibility decision, or financial advice.

## Product value being tested

The core hypothesis is that MSME owners are more likely to engage with formal credit when the experience explains *why* they qualify, shows how to improve, and connects borrowing to business growth—not just a one-time application form.
