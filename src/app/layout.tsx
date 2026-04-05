import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.getlookforward.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LookForward — Movie & Video Game Release Tracker",
    template: "%s · LookForward",
  },
  description:
    "LookForward is the ultimate movie and video game release tracker for iOS. Follow upcoming releases, get countdown reminders, and never miss what's next.",
  applicationName: "LookForward",
  keywords: [
    "movie release tracker",
    "video game release tracker",
    "upcoming movies",
    "upcoming games",
    "release countdown app",
    "iOS entertainment app",
    "LookForward",
  ],
  authors: [{ name: "Corey Foster" }],
  creator: "Corey Foster",
  publisher: "Corey Foster",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "LookForward",
    title: "LookForward — Movie & Video Game Release Tracker",
    description:
      "Track upcoming movies and video games. Get countdown reminders and never miss a release.",
    url: siteUrl,
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "LookForward app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LookForward — Movie & Video Game Release Tracker",
    description:
      "Track upcoming movies and video games. Get countdown reminders and never miss a release.",
    images: ["/app-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/app-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "entertainment",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {/* Page content offset for 48px navbar */}
        <main className="pt-12">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
