import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createSpell: Spell;
  createSpells: Array<Spell>;
  deleteSpell: Spell;
};


export type MutationCreateSpellArgs = {
  spellInfo: SpellInput;
};


export type MutationCreateSpellsArgs = {
  spellArray: Array<SpellInput>;
};


export type MutationDeleteSpellArgs = {
  id: Scalars['Float']['input'];
};

export type PaginatedSpells = {
  __typename?: 'PaginatedSpells';
  hasMore: Scalars['Boolean']['output'];
  spells: Array<Spell>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  spellByID: Spell;
  spells: PaginatedSpells;
  spellsByName: Array<Spell>;
};


export type QuerySpellByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpellsByNameArgs = {
  name: Scalars['String']['input'];
};

export type Spell = {
  __typename?: 'Spell';
  aoe: Scalars['String']['output'];
  castingTime: Scalars['String']['output'];
  class: Scalars['String']['output'];
  damage: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Float']['output'];
  material: Scalars['Boolean']['output'];
  materials: Scalars['String']['output'];
  name: Scalars['String']['output'];
  range: Scalars['String']['output'];
  savingThrow: Scalars['String']['output'];
  school: Scalars['String']['output'];
  somatic: Scalars['Boolean']['output'];
  source: Scalars['String']['output'];
  sphere?: Maybe<Scalars['String']['output']>;
  verbal: Scalars['Boolean']['output'];
};

export type SpellInput = {
  aoe: Scalars['String']['input'];
  castingTime: Scalars['String']['input'];
  class: Scalars['String']['input'];
  damage: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  level: Scalars['Float']['input'];
  material: Scalars['Boolean']['input'];
  materials: Scalars['String']['input'];
  name: Scalars['String']['input'];
  range: Scalars['String']['input'];
  savingThrow: Scalars['String']['input'];
  school: Scalars['String']['input'];
  somatic: Scalars['Boolean']['input'];
  source: Scalars['String']['input'];
  sphere?: InputMaybe<Scalars['String']['input']>;
  verbal: Scalars['Boolean']['input'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type SpellByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SpellByIdQuery = { __typename?: 'Query', spellByID: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, sphere?: string | null } };

export type SpellsQueryVariables = Exact<{
  nameCursor?: InputMaybe<Scalars['String']['input']>;
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  limit: Scalars['Float']['input'];
}>;


export type SpellsQuery = { __typename?: 'Query', spells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, sphere?: string | null }> } };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export function useHelloSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloSuspenseQueryHookResult = ReturnType<typeof useHelloSuspenseQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const SpellByIdDocument = gql`
    query SpellByID($id: Int!) {
  spellByID(id: $id) {
    id
    level
    name
    school
    class
    verbal
    somatic
    material
    materials
    range
    aoe
    castingTime
    duration
    savingThrow
    damage
    description
    source
    sphere
  }
}
    `;

/**
 * __useSpellByIdQuery__
 *
 * To run a query within a React component, call `useSpellByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpellByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpellByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSpellByIdQuery(baseOptions: Apollo.QueryHookOptions<SpellByIdQuery, SpellByIdQueryVariables> & ({ variables: SpellByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpellByIdQuery, SpellByIdQueryVariables>(SpellByIdDocument, options);
      }
export function useSpellByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpellByIdQuery, SpellByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpellByIdQuery, SpellByIdQueryVariables>(SpellByIdDocument, options);
        }
export function useSpellByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SpellByIdQuery, SpellByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SpellByIdQuery, SpellByIdQueryVariables>(SpellByIdDocument, options);
        }
export type SpellByIdQueryHookResult = ReturnType<typeof useSpellByIdQuery>;
export type SpellByIdLazyQueryHookResult = ReturnType<typeof useSpellByIdLazyQuery>;
export type SpellByIdSuspenseQueryHookResult = ReturnType<typeof useSpellByIdSuspenseQuery>;
export type SpellByIdQueryResult = Apollo.QueryResult<SpellByIdQuery, SpellByIdQueryVariables>;
export const SpellsDocument = gql`
    query Spells($nameCursor: String, $lvlCursor: Float, $limit: Float!) {
  spells(nameCursor: $nameCursor, lvlCursor: $lvlCursor, limit: $limit) {
    hasMore
    spells {
      id
      level
      name
      school
      class
      verbal
      somatic
      material
      materials
      range
      aoe
      castingTime
      duration
      savingThrow
      damage
      source
      sphere
    }
  }
}
    `;

/**
 * __useSpellsQuery__
 *
 * To run a query within a React component, call `useSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpellsQuery({
 *   variables: {
 *      nameCursor: // value for 'nameCursor'
 *      lvlCursor: // value for 'lvlCursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSpellsQuery(baseOptions: Apollo.QueryHookOptions<SpellsQuery, SpellsQueryVariables> & ({ variables: SpellsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpellsQuery, SpellsQueryVariables>(SpellsDocument, options);
      }
export function useSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpellsQuery, SpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpellsQuery, SpellsQueryVariables>(SpellsDocument, options);
        }
export function useSpellsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SpellsQuery, SpellsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SpellsQuery, SpellsQueryVariables>(SpellsDocument, options);
        }
export type SpellsQueryHookResult = ReturnType<typeof useSpellsQuery>;
export type SpellsLazyQueryHookResult = ReturnType<typeof useSpellsLazyQuery>;
export type SpellsSuspenseQueryHookResult = ReturnType<typeof useSpellsSuspenseQuery>;
export type SpellsQueryResult = Apollo.QueryResult<SpellsQuery, SpellsQueryVariables>;