import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { client } from "@/content/client";
import "./globals.css";

// One clean sans-serif font, loaded by Next.js so there's no layout jump.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Title comes from the content file. robots tells search engines not to list
// this page or follow its links: it's meant for one client, not the public.
export const metadata: Metadata = {
  title: client.meta.title,
  description: client.meta.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
