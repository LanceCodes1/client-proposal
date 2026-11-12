import { client } from "@/content/client";

// The whole proposal is one server-rendered page. No JavaScript runs in the
// browser: the tabs are plain links that jump to each section's id.

// Shared section wrapper. scroll-mt keeps the heading from hiding under the sticky tabs.
function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20 py-10">
      <h2 id={`${id}-heading`} className="mb-6 text-2xl font-semibold text-amber">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export default function Proposal() {
  const { header, tabs, proposal, pricing, agreement, video } = client;

  return (
    <>
      {/* Sticky tabs: stay pinned at the top while scrolling so any section is one tap away.
          overflow-x-auto is a safety net in case labels ever get longer than a small phone. */}
      <nav
        aria-label="Proposal sections"
        className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className="block whitespace-nowrap rounded-full border border-line px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-amber hover:text-amber"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pb-20">
        {/* Header: who it's for, who made it, and a link back to the portfolio. */}
        <header className="border-b border-line py-12">
          <h1 className="accent-text text-3xl font-bold leading-tight sm:text-4xl">
            {header.title}
          </h1>
          <p className="mt-3 text-muted">{header.preparedBy}</p>
          <a
            href={header.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sunset underline underline-offset-4 hover:text-amber"
          >
            {header.portfolio.label}
          </a>
        </header>

        {/* Proposal: each block gets an orange label, then its quote, paragraphs, or list. */}
        <Section id={proposal.id} heading={proposal.heading}>
          <div className="space-y-8">
            {proposal.blocks.map((block) => (
              <div key={block.label}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sunset">
                  {block.label}
                </h3>
                {block.quote && (
                  <blockquote className="mb-3 border-l-2 border-amber pl-4 text-lg italic">
                    &ldquo;{block.quote}&rdquo;
                  </blockquote>
                )}
                {block.paragraphs?.map((p) => (
                  <p key={p} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-amber">
                    {block.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Pricing: two columns (item, cost + note) so it fits a phone without sideways scrolling. */}
        <Section id={pricing.id} heading={pricing.heading}>
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <table className="w-full text-left">
              <thead className="border-b border-line text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">
                    {pricing.columns.item}
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    {pricing.columns.cost}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map((row) => (
                  <tr key={row.item} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-4 py-4 align-top font-medium">
                      {row.item}
                    </th>
                    <td className="px-4 py-4 align-top">
                      <span className="block font-semibold text-amber">{row.amount}</span>
                      <span className="mt-1 block text-sm text-muted">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Agreement: numbered clauses, then a signature and date line for each person. */}
        <Section id={agreement.id} heading={agreement.heading}>
          <ol className="space-y-5">
            {agreement.clauses.map((clause, i) => (
              <li key={clause.title} className="flex gap-3">
                <span className="font-semibold text-sunset">{i + 1}.</span>
                <div className="leading-relaxed text-muted">
                  <span className="font-semibold text-text">{clause.title}: </span>
                  {clause.text}
                  {clause.items && (
                    <ol className="mt-2 list-[lower-alpha] space-y-1 pl-6 marker:text-amber">
                      {clause.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  )}
                  {clause.after && <p className="mt-2">{clause.after}</p>}
                </div>
              </li>
            ))}
          </ol>

          {/* Blank lines to sign on: side by side on wider screens, stacked on a phone. */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {agreement.signers.map((name) => (
              <div key={name}>
                <p className="mb-8 font-semibold">{name}</p>
                <div className="border-b border-muted" />
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {agreement.signatureLabel}
                </p>
                <div className="mt-8 border-b border-muted" />
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {agreement.dateLabel}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Pitch video: a button once a link is set in content/client.ts, a note until then. */}
        <Section id={video.id} heading={video.heading}>
          {video.url === "" ? (
            <p className="rounded-xl border border-dashed border-line bg-surface px-4 py-8 text-center text-muted">
              {video.comingSoon}
            </p>
          ) : (
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-sunset to-amber px-6 py-3 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {video.buttonLabel}
            </a>
          )}
        </Section>
      </main>
    </>
  );
}
