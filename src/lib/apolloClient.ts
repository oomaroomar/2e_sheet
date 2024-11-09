import { PaginatedSpells } from "@/gql/graphql";
import { InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";

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
const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})
export const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: apolloCache,
    link,
    
});