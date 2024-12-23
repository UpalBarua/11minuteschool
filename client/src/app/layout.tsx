import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "11 Minutes School",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
