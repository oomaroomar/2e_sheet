"use client"

import { FilterProvider } from "@/context/FilterContext";
import {DescriptionListProvider} from '@/context/DescriptionListContext'
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { CharacterProvider } from "@/context/CharacterContext";
import { UserProvider } from "@/context/userContext";


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
  <UserProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </UserProvider>
  </CharacterProvider>
  </DescriptionListProvider>
  </FilterProvider>
  </ApolloProvider>
  );
}