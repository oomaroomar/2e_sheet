import * as Types from './types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useSpellsQuery(options?: Omit<Urql.UseQueryArgs<Operations.SpellsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SpellsQuery, Operations.SpellsQueryVariables>({ query: Operations.SpellsDocument, ...options });
};