# Prompt Log

Important decisions only, one entry per milestone.

---

**Tool:** Claude Code
**Prompt:** Create a public GitHub repo (client-proposal) and a new Next.js project at ~/client-proposal (App Router, TypeScript, Tailwind, ESLint, latest stable, exact pinned versions, no extra libraries). Copy the portfolio's CLAUDE.md, create prompt-log.md and parked.md, then build a one-page client proposal for Reyna's Ride Repair with all copy in content/client.ts.
**Why:** A reusable proposal page I can open in a client meeting; swapping one content file makes it work for the next client.
**Result:** Repo created with gh. Project scaffolded with Next 16.4.6, React 19.3.0, Tailwind 4.3.3, TypeScript 5.9.3, ESLint 9.39.5, all pinned exactly. CLAUDE.md copied, with the content file and remote lines changed to match this project.

### Pricing reasoning

- **Build fee:** $600. About 8 build hours x 1.5 (buffer for testing, debugging, and client setup) x $50/hr.
- **Running cost:** about $20–30 a month (Zapier), paid by the shop.
- **Payment:** 50% deposit ($300) to start, 50% on delivery, due within 7 days.
- **Floor:** $450. Below this the job pays less than my rate once real hours add up. If price is a concern, reduce scope, not my rate.
- **Value:** about $25 a month to run, so it pays for itself if it saves one repair job a month. Confirm her real repair value in the conversation.

---

**Tool:** Claude Code
**Prompt:** Build the one-page proposal: header, proposal, pricing table, agreement with signature lines, and a pitch-video section, with sticky tabs, noindex metadata, and the portfolio's navy/orange/amber colors.
**Why:** A page I can open in the meeting and walk through top to bottom, readable on a phone, reusable for the next client by editing only content/client.ts.
**Result:** Single server-rendered page with no client JavaScript. Tabs are plain anchor links. Pricing uses two columns so it fits a phone. The video section shows "Video coming soon" while the link is "". "What I'll set up" shows as a bullet list for easier reading in the meeting.

---
