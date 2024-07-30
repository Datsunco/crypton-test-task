//react, next
import React from "react";
import Head from "next/head";
import { Metadata } from "next";

import { Jost } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/Footer/Footer";

const fontSans = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Envelope Shop",
  description: "Онлайн магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        <div className="flex flex-column justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
