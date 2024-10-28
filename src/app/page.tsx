"use client"
import Everything from '@/components/Everything';
import { FilterProvider } from './context/FilterContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PaginatedSpells } from '@/gql/graphql';

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        spells: {
          keyArgs: [],
          merge(existing: PaginatedSpells | undefined, incoming: PaginatedSpells) {
            console.log(existing, incoming)
            return {
              hasMore: incoming.hasMore,
              spells: [...(existing?.spells || []), ...incoming.spells]
            }
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: apolloCache,
});

export default function Home() {

  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <Everything />
      </FilterProvider>
    </ApolloProvider>
  );
}
