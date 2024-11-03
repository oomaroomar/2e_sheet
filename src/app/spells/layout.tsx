"use client"

import { FilterProvider } from "@/context/FilterContext";
import {DescriptionListProvider} from '@/context/DescriptionListContext'
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
  <DescriptionListProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </DescriptionListProvider>
  </FilterProvider>
  </ApolloProvider>
  );
}