"use client"

import { FilterProvider } from "@/context/FilterContext";
import {DescriptionListProvider} from '@/context/DescriptionListContext'
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { CharacterProvider } from "@/context/CharacterContext";


export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <ApolloProvider client={apolloClient}>
  <FilterProvider>
  <DescriptionListProvider>
  <CharacterProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </CharacterProvider>
  </DescriptionListProvider>
  </FilterProvider>
  </ApolloProvider>
  );
}