"use client";

import Me from "@/components/Me";
import { CharacterProvider } from "@/context/CharacterContext";
import { UserProvider } from "@/context/userContext";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  return (
    <ApolloProvider client={apolloClient}>
      <CharacterProvider>
        <UserProvider> 
          <div className="h-screen w-screen flex flex-col place-items-center text-black">
            <Me />
            <div className="flex-1 flex gap-10 flex-wrap place-content-center ">
              <Link href="/spells/wizard">
                <button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">
                  Wizard
                </button>
              </Link>
              <Link href="/spells">
                <button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">
                  All
                </button>
              </Link>
              <Link href="/spells/priest">
                <button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">
                  Cleric
                </button>
              </Link>
            </div>
            <div className="flex-1 flex gap-10 flex-wrap place-content-center ">
              <button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">
                Admin
              </button>
            </div>
          </div>
        </UserProvider>
      </CharacterProvider>
    </ApolloProvider>
  );
}
