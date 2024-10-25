import * as Types from './types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useSpellByIdQuery(options: Omit<Urql.UseQueryArgs<Operations.SpellByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SpellByIdQuery, Operations.SpellByIdQueryVariables>({ query: Operations.SpellByIdDocument, ...options });
};