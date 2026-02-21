import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LuminoidX - AI Automation & Web Development",
  description: "Transform your business with intelligent AI automation and scalable web development solutions. We build AI agents, automate workflows, and create modern web applications."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
