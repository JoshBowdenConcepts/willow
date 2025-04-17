import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function yearsSince(year: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

export const yearsSinceStartingDev = yearsSince(2017);

export const metadata: Metadata = {
  title: "Josh Bowden Concepts",
  description: `Design System Architect with ${yearsSinceStartingDev} years experience building unique systems that simplify the lives of designers and engineers.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
