import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
