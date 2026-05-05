import type { Metadata } from "next";
import { Black_Ops_One, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-ops-one",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Operation Profit Asset Recovery | Unclaimed Surplus Funds Recovery",
  description:
    "Operation Profit Asset Recovery helps property owners and heirs recover unclaimed surplus funds from foreclosure and tax deed proceedings nationwide. No recovery, no fee.",
  keywords: [
    "surplus funds recovery",
    "unclaimed funds",
    "foreclosure surplus",
    "tax deed surplus",
    "asset recovery",
    "Operation Profit",
  ],
  openGraph: {
    title: "Operation Profit Asset Recovery",
    description:
      "You may be owed money from a property sale or foreclosure. We find and help claim unclaimed surplus funds nationwide.",
    url: "https://operationprofitllc.com",
    siteName: "Operation Profit Asset Recovery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operation Profit Asset Recovery",
    description:
      "You may be owed money from a property sale or foreclosure. No recovery, no fee.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackOpsOne.variable} ${barlowCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
