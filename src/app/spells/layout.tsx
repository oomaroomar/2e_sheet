"use client"

import { FilterProvider } from "@/context/FilterContext";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <ApolloProvider client={apolloClient}>
      <FilterProvider>
        {children}
      </FilterProvider>
    </ApolloProvider>
  );
}
