"use client"

import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";


export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <ApolloProvider client={apolloClient}>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </ApolloProvider>
  );
}