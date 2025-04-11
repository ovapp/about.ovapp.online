import type { Metadata } from "next";
import { interSemi } from "@/fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "OpenVoice",
  description: "OpenVoice About Us Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSemi.className}antialiased`}>{children}</body>
    </html>
  );
}
