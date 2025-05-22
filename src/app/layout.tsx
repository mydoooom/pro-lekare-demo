import Providers from '@/app/providers'
import { Header } from '@/components/ui'
import type { Metadata } from "next";
import {  Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react'

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const geistMono = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "proLékaře",
  description: "Demo appka pro Meditorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="cs=">
    <body className={`${sourceSans3.variable} ${geistMono.variable} antialiased mt-40`}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
