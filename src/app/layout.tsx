import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "2e Spells",
  description: "Your mom's fav toy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
