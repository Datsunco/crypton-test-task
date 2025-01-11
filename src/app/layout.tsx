//react, next

import React from "react";
import { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer/Footer";
import ClientProvider from "./ClientProvider";

// utils
import { cn } from "@/lib/utils";

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
        <ClientProvider>
          <Header />
          <div className="flex flex-column justify-center">{children}</div>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
