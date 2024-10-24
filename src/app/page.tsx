"use client"
// import SpellCard from "@/components/SpellCard";
import { useMemo } from 'react'
import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next'
import Everything from '@/components/Everything';


export default function Home() {

  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: 'http://localhost:4000/',
      exchanges: [cacheExchange, ssr, fetchExchange],
      // Suspense causes infinity fetching for some reason
      // suspense: true,
    });
    return [client, ssr]
  }, [])


  return (
    <UrqlProvider client={client} ssr={ssr}>
      <Everything />
    </UrqlProvider>
  );
}
