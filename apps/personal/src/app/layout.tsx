import type { Metadata } from "next";
import "./globals.css";

function yearsSince(year: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

export const yearsSinceStartingDev = yearsSince(2018);

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
      <body>{children}</body>
    </html>
  );
}
