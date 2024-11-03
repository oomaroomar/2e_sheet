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

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createSpell: Spell;
  createSpells: Array<Spell>;
  deleteSpell: Spell;
  forgotPassword: Scalars['Boolean']['output'];
  login: UserResponse;
  logout: Scalars['Boolean']['output'];
  register: UserResponse;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
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


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type PaginatedSpells = {
  __typename?: 'PaginatedSpells';
  hasMore: Scalars['Boolean']['output'];
  spells: Array<Spell>;
};

export type Query = {
  __typename?: 'Query';
  allSpells: PaginatedSpells;
  clericSpells: PaginatedSpells;
  hello: Scalars['String']['output'];
  me?: Maybe<User>;
  spellByID: Spell;
  spellsByName: Array<Spell>;
  wizardSpells: PaginatedSpells;
};


export type QueryAllSpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClericSpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpellByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySpellsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryWizardSpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
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
  spheres?: Maybe<Array<Scalars['String']['output']>>;
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
  spheres?: InputMaybe<Array<Scalars['String']['input']>>;
  verbal: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AllSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  nameCursor?: InputMaybe<Scalars['String']['input']>;
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
}>;


export type AllSpellsQuery = { __typename?: 'Query', allSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null }> } };

export type ClericSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type ClericSpellsQuery = { __typename?: 'Query', clericSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null }> } };

export type SpellByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SpellByIdQuery = { __typename?: 'Query', spellByID: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null } };

export type WizardSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  nameCursor?: InputMaybe<Scalars['String']['input']>;
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
}>;


export type WizardSpellsQuery = { __typename?: 'Query', wizardSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null }> } };


export const AllSpellsDocument = gql`
    query AllSpells($limit: Float!, $nameCursor: String, $lvlCursor: Float) {
  allSpells(limit: $limit, nameCursor: $nameCursor, lvlCursor: $lvlCursor) {
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
      description
      source
      spheres
    }
    hasMore
  }
}
    `;

/**
 * __useAllSpellsQuery__
 *
 * To run a query within a React component, call `useAllSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSpellsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      nameCursor: // value for 'nameCursor'
 *      lvlCursor: // value for 'lvlCursor'
 *   },
 * });
 */
export function useAllSpellsQuery(baseOptions: Apollo.QueryHookOptions<AllSpellsQuery, AllSpellsQueryVariables> & ({ variables: AllSpellsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSpellsQuery, AllSpellsQueryVariables>(AllSpellsDocument, options);
      }
export function useAllSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSpellsQuery, AllSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSpellsQuery, AllSpellsQueryVariables>(AllSpellsDocument, options);
        }
export function useAllSpellsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllSpellsQuery, AllSpellsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllSpellsQuery, AllSpellsQueryVariables>(AllSpellsDocument, options);
        }
export type AllSpellsQueryHookResult = ReturnType<typeof useAllSpellsQuery>;
export type AllSpellsLazyQueryHookResult = ReturnType<typeof useAllSpellsLazyQuery>;
export type AllSpellsSuspenseQueryHookResult = ReturnType<typeof useAllSpellsSuspenseQuery>;
export type AllSpellsQueryResult = Apollo.QueryResult<AllSpellsQuery, AllSpellsQueryVariables>;
export const ClericSpellsDocument = gql`
    query ClericSpells($limit: Float!, $lvlCursor: Float, $nameCursor: String) {
  clericSpells(limit: $limit, lvlCursor: $lvlCursor, nameCursor: $nameCursor) {
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
      description
      source
      spheres
    }
    hasMore
  }
}
    `;

/**
 * __useClericSpellsQuery__
 *
 * To run a query within a React component, call `useClericSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClericSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClericSpellsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      lvlCursor: // value for 'lvlCursor'
 *      nameCursor: // value for 'nameCursor'
 *   },
 * });
 */
export function useClericSpellsQuery(baseOptions: Apollo.QueryHookOptions<ClericSpellsQuery, ClericSpellsQueryVariables> & ({ variables: ClericSpellsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClericSpellsQuery, ClericSpellsQueryVariables>(ClericSpellsDocument, options);
      }
export function useClericSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClericSpellsQuery, ClericSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClericSpellsQuery, ClericSpellsQueryVariables>(ClericSpellsDocument, options);
        }
export function useClericSpellsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ClericSpellsQuery, ClericSpellsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ClericSpellsQuery, ClericSpellsQueryVariables>(ClericSpellsDocument, options);
        }
export type ClericSpellsQueryHookResult = ReturnType<typeof useClericSpellsQuery>;
export type ClericSpellsLazyQueryHookResult = ReturnType<typeof useClericSpellsLazyQuery>;
export type ClericSpellsSuspenseQueryHookResult = ReturnType<typeof useClericSpellsSuspenseQuery>;
export type ClericSpellsQueryResult = Apollo.QueryResult<ClericSpellsQuery, ClericSpellsQueryVariables>;
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
    spheres
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
export const WizardSpellsDocument = gql`
    query WizardSpells($limit: Float!, $nameCursor: String, $lvlCursor: Float) {
  wizardSpells(limit: $limit, nameCursor: $nameCursor, lvlCursor: $lvlCursor) {
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
      description
      source
      spheres
    }
  }
}
    `;

/**
 * __useWizardSpellsQuery__
 *
 * To run a query within a React component, call `useWizardSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWizardSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWizardSpellsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      nameCursor: // value for 'nameCursor'
 *      lvlCursor: // value for 'lvlCursor'
 *   },
 * });
 */
export function useWizardSpellsQuery(baseOptions: Apollo.QueryHookOptions<WizardSpellsQuery, WizardSpellsQueryVariables> & ({ variables: WizardSpellsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WizardSpellsQuery, WizardSpellsQueryVariables>(WizardSpellsDocument, options);
      }
export function useWizardSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WizardSpellsQuery, WizardSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WizardSpellsQuery, WizardSpellsQueryVariables>(WizardSpellsDocument, options);
        }
export function useWizardSpellsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WizardSpellsQuery, WizardSpellsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WizardSpellsQuery, WizardSpellsQueryVariables>(WizardSpellsDocument, options);
        }
export type WizardSpellsQueryHookResult = ReturnType<typeof useWizardSpellsQuery>;
export type WizardSpellsLazyQueryHookResult = ReturnType<typeof useWizardSpellsLazyQuery>;
export type WizardSpellsSuspenseQueryHookResult = ReturnType<typeof useWizardSpellsSuspenseQuery>;
export type WizardSpellsQueryResult = Apollo.QueryResult<WizardSpellsQuery, WizardSpellsQueryVariables>;