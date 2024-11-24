"use client"

import { UserProvider } from "@/context/userContext";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";


export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <ApolloProvider client={apolloClient}>
    <UserProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </UserProvider>
  </ApolloProvider>
  );
}