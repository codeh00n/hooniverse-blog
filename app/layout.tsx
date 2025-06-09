import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import ThreeBackground from "./components/ThreeBackground";
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
        "text-[var(--text-primary)] bg-[var(--bg-secondary)] dark:text-[var(--text-primary)] dark:bg-[var(--bg-primary)]",
        GeistSans.variable,
        GeistMono.variable,
      )}
      data-oid="b7.a-ws"
    >
      <body
        className="antialiased max-w-4xl mx-4 mt-6 lg:mx-auto"
        data-oid="gnu24q8"
      >
        <ThreeBackground data-oid="30zte77" />
        <main
          className="flex-auto min-w-0 mt-4 flex flex-col px-1 md:px-4"
          data-oid="gswf:h-"
        >
          <Navbar data-oid="r50zqzk" />
          {children}
          <Footer data-oid="5raw5hr" />
          <Analytics data-oid="wlih:kq" />
          <SpeedInsights data-oid="srxanmc" />
        </main>
      </body>
    </html>
  );
}
