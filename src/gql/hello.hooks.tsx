import * as Types from './types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useHelloQuery(options?: Omit<Urql.UseQueryArgs<Operations.HelloQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.HelloQuery, Operations.HelloQueryVariables>({ query: Operations.HelloDocument, ...options });
};