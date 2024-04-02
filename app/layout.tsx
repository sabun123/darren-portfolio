import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Darren Chng",
  description: "Darren Chng's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body >{children}</body>
    </html>
  );
}
