import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import Header from "./ui/Header";
import SideMenu from "./ui/SideMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Database",
  description: "A simple book management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex flex-row">
          <SideMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
