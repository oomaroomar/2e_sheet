import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HelloQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type SpellsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SpellsQuery = { __typename?: 'Query', spells: Array<{ __typename?: 'Spell', id: number, level: number, name: string, school: string, class: string, verbal: boolean, somatic: boolean, material: boolean, materials: string, range: string, aoe: string, castingTime: string, duration: string, savingThrow: string, damage: string, description: string, source: string, sphere?: string | null }> };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;
export const SpellsDocument = gql`
    query Spells {
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
    sphere
  }
}
    `;