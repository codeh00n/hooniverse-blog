import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import ParticlesBackground from "./components/ParticlesBackground";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "HOONIVERSE",
    template: "%s | HOONIVERSE",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
      data-oid="6io1fi."
    >
      <body
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        data-oid="a1x.kds"
      >
        <ParticlesBackground data-oid="-4749j3" />
        <main
          className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
          data-oid="baeqcik"
        >
          <Navbar data-oid="_flifh3" />
          {children}
          <Footer data-oid="80x6bx7" />
          <Analytics data-oid="4m:a4-:" />
          <SpeedInsights data-oid="dls74le" />
        </main>
      </body>
    </html>
  );
}
