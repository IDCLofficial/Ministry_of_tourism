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
      <body
        className={`antialiased ${satoshiFont.className}`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
