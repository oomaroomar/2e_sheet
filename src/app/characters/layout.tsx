"use client"

import { CharacterProvider } from "@/context/CharacterContext";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";


export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <ApolloProvider client={apolloClient}>
    <CharacterProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </CharacterProvider>
  </ApolloProvider>
  );
}