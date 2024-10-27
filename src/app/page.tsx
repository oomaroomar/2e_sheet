"use client"
// import SpellCard from "@/components/SpellCard";
// import { useMemo } from 'react'
// import { UrqlProvider, ssrExchange, fetchExchange, createClient } from '@urql/next'
import Everything from '@/components/Everything';
import { FilterProvider } from './context/FilterContext';
// import { Resolver, cacheExchange } from '@urql/exchange-graphcache';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default function Home() {

  // const [client, ssr] = useMemo(() => {
  //   const ssr = ssrExchange({
  //     isClient: typeof window !== 'undefined',
  //   });
  //   const client = createClient({
  //     url: 'http://localhost:4000/',
  //     exchanges: [cacheExchange({resolvers: {
  //       Query: {
  //         spells: cursorPagination()
  //       }
  //     }}), ssr, fetchExchange],
  //     // Suspense causes infinity fetching for some reason
  //     // suspense: true,
  //   });
  //   return [client, ssr]
  // }, [])


  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <Everything />
      </FilterProvider>
    </ApolloProvider>
  );
}
