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

export type Character = {
  __typename?: 'Character';
  id: Scalars['Float']['output'];
  learnedSpells: Array<LearnedSpell>;
  name: Scalars['String']['output'];
  spellBooks?: Maybe<Array<SpellBook>>;
};

export type CharacterResponse = {
  __typename?: 'CharacterResponse';
  character?: Maybe<Character>;
  error?: Maybe<Scalars['String']['output']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LearnedSpell = {
  __typename?: 'LearnedSpell';
  createdAt: Scalars['String']['output'];
  failLvl?: Maybe<Scalars['Int']['output']>;
  learnLvl?: Maybe<Scalars['Int']['output']>;
  spell: Spell;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeName: CharacterResponse;
  changePassword: UserResponse;
  createCharacter: CharacterResponse;
  createSpell: Spell;
  createSpellBook: SpellBookResponse;
  createSpells: Scalars['Boolean']['output'];
  deleteCharacter: CharacterResponse;
  deleteSpell: Spell;
  deleteSpellBook: Scalars['Boolean']['output'];
  elevatePrivilege: UserResponse;
  forgetSpell: CharacterResponse;
  forgotPassword: Scalars['Boolean']['output'];
  learnSpell: CharacterResponse;
  login: UserResponse;
  logout: Scalars['Boolean']['output'];
  register: UserResponse;
  removePrivilege: UserResponse;
  renameSpellBook?: Maybe<SpellBook>;
  updateSpell: SpellEditResponse;
  writeSpell: SpellPageResponse;
};


export type MutationChangeNameArgs = {
  characterId: Scalars['Float']['input'];
  newName: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateCharacterArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateSpellArgs = {
  spellInfo: SpellInput;
};


export type MutationCreateSpellBookArgs = {
  charId: Scalars['Float']['input'];
  maxPages: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateSpellsArgs = {
  spellArray: Array<SpellInput>;
};


export type MutationDeleteCharacterArgs = {
  characterId: Scalars['Float']['input'];
};


export type MutationDeleteSpellArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteSpellBookArgs = {
  bookId: Scalars['Float']['input'];
};


export type MutationForgetSpellArgs = {
  characterId: Scalars['Float']['input'];
  spellId: Scalars['Float']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLearnSpellArgs = {
  characterId: Scalars['Float']['input'];
  spellId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationRenameSpellBookArgs = {
  bookId: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateSpellArgs = {
  spellInfo: SpellEditInput;
};


export type MutationWriteSpellArgs = {
  input: WriteSpellInput;
};

export type PaginatedSpells = {
  __typename?: 'PaginatedSpells';
  hasMore: Scalars['Boolean']['output'];
  spells: Array<Spell>;
};

export type Query = {
  __typename?: 'Query';
  allSpells: PaginatedSpells;
  character?: Maybe<Character>;
  clericSpells: PaginatedSpells;
  me?: Maybe<User>;
  myCharacters?: Maybe<Array<Character>>;
  mySpellBooks: Array<SpellBook>;
  spellByID: Spell;
  spellbook: SpellBook;
  spellsByName: Array<Spell>;
  wizardSpells: PaginatedSpells;
};


export type QueryAllSpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCharacterArgs = {
  cId: Scalars['Float']['input'];
};


export type QueryClericSpellsArgs = {
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMySpellBooksArgs = {
  charId: Scalars['Float']['input'];
};


export type QuerySpellByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySpellbookArgs = {
  bookId: Scalars['Float']['input'];
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
  createdAt: Scalars['String']['output'];
  creatorId?: Maybe<Scalars['Float']['output']>;
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
  updatedAt: Scalars['String']['output'];
  verbal: Scalars['Boolean']['output'];
};

export type SpellBook = {
  __typename?: 'SpellBook';
  id: Scalars['Float']['output'];
  maxPages?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  owner: Character;
  pagesLeft: Scalars['Int']['output'];
  spellPages?: Maybe<Array<SpellPage>>;
};

export type SpellBookResponse = {
  __typename?: 'SpellBookResponse';
  errors?: Maybe<Scalars['String']['output']>;
  spellBook?: Maybe<SpellBook>;
};

export type SpellEditInput = {
  aoe: Scalars['String']['input'];
  castingTime: Scalars['String']['input'];
  class: Scalars['String']['input'];
  damage: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  level: Scalars['Float']['input'];
  material: Scalars['Boolean']['input'];
  materials: Scalars['String']['input'];
  name: Scalars['String']['input'];
  range: Scalars['String']['input'];
  savingThrow: Scalars['String']['input'];
  school: Scalars['String']['input'];
  somatic: Scalars['Boolean']['input'];
  spheres?: InputMaybe<Array<Scalars['String']['input']>>;
  verbal: Scalars['Boolean']['input'];
};

export type SpellEditResponse = {
  __typename?: 'SpellEditResponse';
  error?: Maybe<Scalars['String']['output']>;
  spell?: Maybe<Spell>;
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
  spheres?: InputMaybe<Array<Scalars['String']['input']>>;
  verbal: Scalars['Boolean']['input'];
};

export type SpellPage = {
  __typename?: 'SpellPage';
  book: SpellBook;
  pages?: Maybe<Scalars['Int']['output']>;
  spell: Spell;
  spellId: Scalars['Float']['output'];
};

export type SpellPageResponse = {
  __typename?: 'SpellPageResponse';
  error?: Maybe<Scalars['String']['output']>;
  spellPage?: Maybe<SpellPage>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isAdmin: Scalars['Boolean']['output'];
  spellBooks?: Maybe<Array<SpellBook>>;
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

export type WriteSpellInput = {
  bookId: Scalars['Float']['input'];
  pages: Scalars['Float']['input'];
  spellId: Scalars['Float']['input'];
};

export type SpellInfoFragment = { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null };

export type SpellLiteInfoFragment = { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, username?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreateCharacterMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateCharacterMutation = { __typename?: 'Mutation', createCharacter: { __typename?: 'CharacterResponse', error?: string | null, character?: { __typename?: 'Character', name: string, id: number } | null } };

export type CreateSpellBookMutationVariables = Exact<{
  maxPages: Scalars['Float']['input'];
  charId: Scalars['Float']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateSpellBookMutation = { __typename?: 'Mutation', createSpellBook: { __typename?: 'SpellBookResponse', errors?: string | null, spellBook?: { __typename?: 'SpellBook', id: number, name: string } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LearnSpellMutationVariables = Exact<{
  characterId: Scalars['Float']['input'];
  spellId: Scalars['Float']['input'];
}>;


export type LearnSpellMutation = { __typename?: 'Mutation', learnSpell: { __typename?: 'CharacterResponse', error?: string | null, character?: { __typename?: 'Character', id: number, learnedSpells: Array<{ __typename?: 'LearnedSpell', spell: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null } }> } | null } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', username?: string | null, id: number } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', username?: string | null, id: number } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type WriteSpellMutationVariables = Exact<{
  input: WriteSpellInput;
}>;


export type WriteSpellMutation = { __typename?: 'Mutation', writeSpell: { __typename?: 'SpellPageResponse', error?: string | null, spellPage?: { __typename?: 'SpellPage', spellId: number } | null } };

export type AllSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  nameCursor?: InputMaybe<Scalars['String']['input']>;
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
}>;


export type AllSpellsQuery = { __typename?: 'Query', allSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null }> } };

export type ClericSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
  nameCursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type ClericSpellsQuery = { __typename?: 'Query', clericSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null }> } };

export type CharacterQueryVariables = Exact<{
  cId: Scalars['Float']['input'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', learnedSpells: Array<{ __typename?: 'LearnedSpell', spell: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null } }> } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username?: string | null, id: number } | null };

export type MyCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCharactersQuery = { __typename?: 'Query', myCharacters?: Array<{ __typename?: 'Character', id: number, name: string, spellBooks?: Array<{ __typename?: 'SpellBook', id: number, name: string, maxPages?: number | null, pagesLeft: number, spellPages?: Array<{ __typename?: 'SpellPage', pages?: number | null, spell: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null } }> | null, owner: { __typename?: 'Character', name: string } }> | null, learnedSpells: Array<{ __typename?: 'LearnedSpell', spell: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null } }> }> | null };

export type SpellByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SpellByIdQuery = { __typename?: 'Query', spellByID: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, spheres?: Array<string> | null } };

export type SpellbookQueryVariables = Exact<{
  bookId: Scalars['Float']['input'];
}>;


export type SpellbookQuery = { __typename?: 'Query', spellbook: { __typename?: 'SpellBook', maxPages?: number | null, name: string, pagesLeft: number, spellPages?: Array<{ __typename?: 'SpellPage', spell: { __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null } }> | null } };

export type WizardSpellsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  nameCursor?: InputMaybe<Scalars['String']['input']>;
  lvlCursor?: InputMaybe<Scalars['Float']['input']>;
}>;


export type WizardSpellsQuery = { __typename?: 'Query', wizardSpells: { __typename?: 'PaginatedSpells', hasMore: boolean, spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, source: string, spheres?: Array<string> | null }> } };

export const SpellInfoFragmentDoc = gql`
    fragment SpellInfo on Spell {
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
    `;
export const SpellLiteInfoFragmentDoc = gql`
    fragment SpellLiteInfo on Spell {
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
  spheres
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    user {
      id
      username
    }
    errors {
      field
      message
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCharacterDocument = gql`
    mutation CreateCharacter($name: String!) {
  createCharacter(name: $name) {
    character {
      name
      id
    }
    error
  }
}
    `;
export type CreateCharacterMutationFn = Apollo.MutationFunction<CreateCharacterMutation, CreateCharacterMutationVariables>;

/**
 * __useCreateCharacterMutation__
 *
 * To run a mutation, you first call `useCreateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacterMutation, { data, loading, error }] = useCreateCharacterMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCharacterMutation(baseOptions?: Apollo.MutationHookOptions<CreateCharacterMutation, CreateCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCharacterMutation, CreateCharacterMutationVariables>(CreateCharacterDocument, options);
      }
export type CreateCharacterMutationHookResult = ReturnType<typeof useCreateCharacterMutation>;
export type CreateCharacterMutationResult = Apollo.MutationResult<CreateCharacterMutation>;
export type CreateCharacterMutationOptions = Apollo.BaseMutationOptions<CreateCharacterMutation, CreateCharacterMutationVariables>;
export const CreateSpellBookDocument = gql`
    mutation CreateSpellBook($maxPages: Float!, $charId: Float!, $name: String!) {
  createSpellBook(maxPages: $maxPages, charId: $charId, name: $name) {
    spellBook {
      id
      name
    }
    errors
  }
}
    `;
export type CreateSpellBookMutationFn = Apollo.MutationFunction<CreateSpellBookMutation, CreateSpellBookMutationVariables>;

/**
 * __useCreateSpellBookMutation__
 *
 * To run a mutation, you first call `useCreateSpellBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpellBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpellBookMutation, { data, loading, error }] = useCreateSpellBookMutation({
 *   variables: {
 *      maxPages: // value for 'maxPages'
 *      charId: // value for 'charId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateSpellBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateSpellBookMutation, CreateSpellBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSpellBookMutation, CreateSpellBookMutationVariables>(CreateSpellBookDocument, options);
      }
export type CreateSpellBookMutationHookResult = ReturnType<typeof useCreateSpellBookMutation>;
export type CreateSpellBookMutationResult = Apollo.MutationResult<CreateSpellBookMutation>;
export type CreateSpellBookMutationOptions = Apollo.BaseMutationOptions<CreateSpellBookMutation, CreateSpellBookMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LearnSpellDocument = gql`
    mutation LearnSpell($characterId: Float!, $spellId: Float!) {
  learnSpell(characterId: $characterId, spellId: $spellId) {
    character {
      id
      learnedSpells {
        spell {
          ...SpellLiteInfo
        }
      }
    }
    error
  }
}
    ${SpellLiteInfoFragmentDoc}`;
export type LearnSpellMutationFn = Apollo.MutationFunction<LearnSpellMutation, LearnSpellMutationVariables>;

/**
 * __useLearnSpellMutation__
 *
 * To run a mutation, you first call `useLearnSpellMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLearnSpellMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [learnSpellMutation, { data, loading, error }] = useLearnSpellMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      spellId: // value for 'spellId'
 *   },
 * });
 */
export function useLearnSpellMutation(baseOptions?: Apollo.MutationHookOptions<LearnSpellMutation, LearnSpellMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LearnSpellMutation, LearnSpellMutationVariables>(LearnSpellDocument, options);
      }
export type LearnSpellMutationHookResult = ReturnType<typeof useLearnSpellMutation>;
export type LearnSpellMutationResult = Apollo.MutationResult<LearnSpellMutation>;
export type LearnSpellMutationOptions = Apollo.BaseMutationOptions<LearnSpellMutation, LearnSpellMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $usernameOrEmail: String!) {
  login(password: $password, usernameOrEmail: $usernameOrEmail) {
    user {
      username
      id
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    user {
      username
      id
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const WriteSpellDocument = gql`
    mutation WriteSpell($input: WriteSpellInput!) {
  writeSpell(input: $input) {
    error
    spellPage {
      spellId
    }
  }
}
    `;
export type WriteSpellMutationFn = Apollo.MutationFunction<WriteSpellMutation, WriteSpellMutationVariables>;

/**
 * __useWriteSpellMutation__
 *
 * To run a mutation, you first call `useWriteSpellMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWriteSpellMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [writeSpellMutation, { data, loading, error }] = useWriteSpellMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWriteSpellMutation(baseOptions?: Apollo.MutationHookOptions<WriteSpellMutation, WriteSpellMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WriteSpellMutation, WriteSpellMutationVariables>(WriteSpellDocument, options);
      }
export type WriteSpellMutationHookResult = ReturnType<typeof useWriteSpellMutation>;
export type WriteSpellMutationResult = Apollo.MutationResult<WriteSpellMutation>;
export type WriteSpellMutationOptions = Apollo.BaseMutationOptions<WriteSpellMutation, WriteSpellMutationVariables>;
export const AllSpellsDocument = gql`
    query AllSpells($limit: Float!, $nameCursor: String, $lvlCursor: Float) {
  allSpells(limit: $limit, nameCursor: $nameCursor, lvlCursor: $lvlCursor) {
    hasMore
    spells {
      ...SpellLiteInfo
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

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
    hasMore
    spells {
      ...SpellLiteInfo
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

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
export const CharacterDocument = gql`
    query Character($cId: Float!) {
  character(cId: $cId) {
    learnedSpells {
      spell {
        ...SpellLiteInfo
      }
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      cId: // value for 'cId'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables> & ({ variables: CharacterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
      }
export function useCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export function useCharacterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<typeof useCharacterLazyQuery>;
export type CharacterSuspenseQueryHookResult = ReturnType<typeof useCharacterSuspenseQuery>;
export type CharacterQueryResult = Apollo.QueryResult<CharacterQuery, CharacterQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    username
    id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MyCharactersDocument = gql`
    query MyCharacters {
  myCharacters {
    id
    spellBooks {
      id
      spellPages {
        pages
        spell {
          ...SpellLiteInfo
        }
      }
      name
      maxPages
      pagesLeft
      owner {
        name
      }
    }
    name
    learnedSpells {
      spell {
        ...SpellLiteInfo
      }
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

/**
 * __useMyCharactersQuery__
 *
 * To run a query within a React component, call `useMyCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCharactersQuery(baseOptions?: Apollo.QueryHookOptions<MyCharactersQuery, MyCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCharactersQuery, MyCharactersQueryVariables>(MyCharactersDocument, options);
      }
export function useMyCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCharactersQuery, MyCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCharactersQuery, MyCharactersQueryVariables>(MyCharactersDocument, options);
        }
export function useMyCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyCharactersQuery, MyCharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyCharactersQuery, MyCharactersQueryVariables>(MyCharactersDocument, options);
        }
export type MyCharactersQueryHookResult = ReturnType<typeof useMyCharactersQuery>;
export type MyCharactersLazyQueryHookResult = ReturnType<typeof useMyCharactersLazyQuery>;
export type MyCharactersSuspenseQueryHookResult = ReturnType<typeof useMyCharactersSuspenseQuery>;
export type MyCharactersQueryResult = Apollo.QueryResult<MyCharactersQuery, MyCharactersQueryVariables>;
export const SpellByIdDocument = gql`
    query SpellByID($id: Int!) {
  spellByID(id: $id) {
    ...SpellInfo
  }
}
    ${SpellInfoFragmentDoc}`;

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
export const SpellbookDocument = gql`
    query Spellbook($bookId: Float!) {
  spellbook(bookId: $bookId) {
    maxPages
    name
    pagesLeft
    spellPages {
      spell {
        ...SpellLiteInfo
      }
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

/**
 * __useSpellbookQuery__
 *
 * To run a query within a React component, call `useSpellbookQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpellbookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpellbookQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useSpellbookQuery(baseOptions: Apollo.QueryHookOptions<SpellbookQuery, SpellbookQueryVariables> & ({ variables: SpellbookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpellbookQuery, SpellbookQueryVariables>(SpellbookDocument, options);
      }
export function useSpellbookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpellbookQuery, SpellbookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpellbookQuery, SpellbookQueryVariables>(SpellbookDocument, options);
        }
export function useSpellbookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SpellbookQuery, SpellbookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SpellbookQuery, SpellbookQueryVariables>(SpellbookDocument, options);
        }
export type SpellbookQueryHookResult = ReturnType<typeof useSpellbookQuery>;
export type SpellbookLazyQueryHookResult = ReturnType<typeof useSpellbookLazyQuery>;
export type SpellbookSuspenseQueryHookResult = ReturnType<typeof useSpellbookSuspenseQuery>;
export type SpellbookQueryResult = Apollo.QueryResult<SpellbookQuery, SpellbookQueryVariables>;
export const WizardSpellsDocument = gql`
    query WizardSpells($limit: Float!, $nameCursor: String, $lvlCursor: Float) {
  wizardSpells(limit: $limit, nameCursor: $nameCursor, lvlCursor: $lvlCursor) {
    hasMore
    spells {
      ...SpellLiteInfo
    }
  }
}
    ${SpellLiteInfoFragmentDoc}`;

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