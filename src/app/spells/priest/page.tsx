"use client"
import Everything from './Everything';
import { FilterProvider } from '@/context/FilterContext';
import {ApolloProvider } from '@apollo/client';
import {apolloClient} from '@/lib/apolloClient'

// export const apolloCache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         spells: {
//           keyArgs: [],
//           merge(existing: PaginatedSpells | undefined, incoming: PaginatedSpells) {
//             console.log(existing, incoming)
//             return {
//               hasMore: incoming.hasMore,
//               spells: [...(existing?.spells || []), ...incoming.spells]
//             }
//           }
//         }
//       }
//     }
//   }
// })

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: apolloCache,
// });

export default function Home() {

  return (
    <ApolloProvider client={apolloClient}>
      <FilterProvider>
        <Everything />
      </FilterProvider>
    </ApolloProvider>
  );
}
