import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientShell from "./ClientShell";
import { buildRootMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";

const satoshiFont = localFont({
  src: [
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Italic.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Bold.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata: Metadata = buildRootMetadata({
  title: "Ministry of Tourism",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_031e7d19c30ce99923f1cd62"
          defer
        />
      </head>
      <body
        className={`antialiased ${satoshiFont.className}`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
