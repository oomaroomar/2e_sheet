import type { Metadata } from "next";
import "./globals.css";

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
        <body>{children}</body>
    </html>
  );
}
