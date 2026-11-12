// Every word on the proposal page lives here. For a new client, copy this file's
// shape, change the text, and the page rebuilds itself. No component edits needed.

export const client = {
  // Browser tab title and short description. Search engines are told to skip the page (see app/layout.tsx).
  meta: {
    title: "Booking Help for Reyna's Ride Repair",
    description: "Proposal prepared by Lance Gonzalez.",
  },

  header: {
    title: "Booking Help for Reyna's Ride Repair",
    preparedBy: "Prepared by Lance Gonzalez · November 2026",
    portfolio: {
      label: "See my portfolio",
      url: "https://lance-gonzalez-portfolio.vercel.app",
    },
  },

  // The sticky tabs. Each id must match a section id below so the tab can jump to it.
  tabs: [
    { id: "proposal", label: "Proposal" },
    { id: "pricing", label: "Pricing" },
    { id: "agreement", label: "Agreement" },
    { id: "video", label: "Video" },
  ],

  proposal: {
    id: "proposal",
    heading: "Proposal",
    // Each block is one labelled part of the proposal. "bullets" is optional and shows as a list.
    blocks: [
      {
        label: "What you told me",
        quote: "I just want to stop losing jobs because I didn't get back to someone.",
        paragraphs: [
          "Right now, customers book by texting the shop phone or messaging your social page. You answer between repairs, often hours later, and the schedule lives on a paper calendar by the till. Last month two Saturdays got double-booked and a customer who'd waited a week walked.",
        ],
      },
      {
        label: "What I'll set up",
        bullets: [
          "One booking link in your phone's auto-reply and on your social page, where customers pick a repair type and a day",
          "An instant reply so every customer hears back in seconds",
          "A double-booking check, so a taken slot is flagged, not booked",
          "One shared calendar on your phone and your cousin's, in place of the paper one",
          "You confirm every booking with one tap. Nothing is final without you.",
        ],
      },
      {
        label: "What it's worth",
        paragraphs: [
          "Every customer gets an answer right away, and the calendar can't double-book. It costs about $25 a month to run, so it pays for itself if it saves one repair job a month.",
        ],
      },
      {
        label: "The honest part",
        paragraphs: [
          "This only works if the shared calendar replaces the paper one. Two calendars side by side is how double-booking happens. I'll set it up so it's as easy as the paper one, and I'll walk your cousin through it too.",
        ],
      },
      {
        label: "Next step",
        paragraphs: [
          "A 20-minute call to go over your repair types and how long each takes. Setup takes about a week (5 business days) once I have access to your shop's accounts.",
        ],
      },
    ],
  },

  pricing: {
    id: "pricing",
    heading: "Pricing",
    // Column headers are kept here too so the table has no hard-coded words.
    columns: { item: "Item", cost: "Cost" },
    rows: [
      {
        item: "Build fee",
        amount: "$600, one time",
        note: "Setup, testing, and a walkthrough with you and your cousin.",
      },
      {
        item: "Running cost",
        amount: "About $20–30 a month",
        note: "Paid directly to the booking service.",
      },
      {
        item: "Payment terms",
        amount: "50% deposit ($300) to start",
        note: "$300 due within 7 days of delivery.",
      },
    ],
  },

  agreement: {
    id: "agreement",
    heading: "Agreement",
    // Numbered clauses. "items" is optional and shows as a lettered sub-list.
    clauses: [
      {
        title: "What I'm building",
        text: "A booking system with one booking link for the shop phone's auto-reply and your social page, an instant confirmation to each customer, a double-booking check, one shared calendar for you and your cousin, and one-tap approval of every booking by you.",
      },
      {
        title: "What's not included",
        text: "A new website, taking payments or deposits online, ongoing daily monitoring, and changes to your phone plan or social media accounts beyond adding the booking link.",
      },
      {
        title: "Price",
        text: "Build fee $600, one time. Running cost about $20–30 a month, paid by you directly to the booking service.",
      },
      {
        title: "Payment",
        text: "50% deposit ($300) before work starts. The remaining $300 is due within 7 days of delivery. Payment by Zelle, Venmo, or check.",
      },
      {
        title: "Timeline",
        text: "Delivery within 5 business days of receiving:",
        items: [
          "access to the shop's Google account,",
          "your list of repair types and how long each takes, and",
          "a 20-minute setup call with you and your cousin.",
        ],
        after: "Delays in these move the delivery date by the same amount.",
      },
      {
        title: "Changes",
        text: "Changes to the scope above are quoted separately before work starts.",
      },
    ],
    // One signature block per person. Labels sit under the blank lines.
    signatureLabel: "Signature",
    dateLabel: "Date",
    signers: ["Lance Gonzalez", "Reyna"],
  },

  video: {
    id: "video",
    heading: "Pitch video",
    // Leave url as "" until the video is ready. The page then shows comingSoon instead of the button.
    url: "https://www.loom.com/share/0fd633f78d2f4ec9be2bf75b1ffbdce8",
    comingSoon: "Video coming soon",
    buttonLabel: "Watch the pitch video",
  },
};
