import { includes } from "./utils";

export interface Spell {
    id: number
    level: number;
    name: string,
    school: string,
    class: string,
    verbal: boolean,
    somatic: boolean,
    material: boolean,
    materials: string,
    range: string,
    aoe: string,
    castingTime: string,
    duration: string,
    savingThrow: string,
    damage: string,
    description: string; 
    source: string
    spheres?: string[] | null
};

export interface svgProps {
    h: string
}

export type SpellLite = Omit<Spell, "description">

export const components = ['material', 'somatic', 'verbal'] as const
export type Components = typeof components[number]

// -1 for non damaging
// 0 for don't care
// 1 for damaging
export const dmgOptions = [0, 1, -1] as const
export type DmgOption = typeof dmgOptions[number]
export function dmgToTextConverter(n: number): string {
    if(n === -1) return 'Nondamaging'
    if(n === 1) return 'Damaging'
    return 'Any'
}

export type School = 'Abjuration' |'Alteration' | 'Conjuration' | 'Divination'
    |'Enchantment'
    |'Evocation'
    |'Illusion'
    |'Necromancy' | ''

export const schools: Readonly<School[]> = ['Abjuration',
    'Alteration',
    'Conjuration',
    'Divination',
    'Enchantment',
    'Evocation',
    'Illusion',
    'Necromancy', ''] as const

export type CastingClass = "Wizard" | "Cleric"

// Self: '0', 'self'
// Touch: 'touch'
// Feet: 'feet' or 'ft.'
// Yards: 'yards' or 'yds.'
// Special: 'Special'
export const Ranges = ['Self','Touch', 'Feet', 'Yards', 'Special'] as const
export type Range = typeof Ranges[number]

// 1 creature: '1 creature' and 'creature touched'
export const AoEs = ['Special', '1 creature', 'Radius', 'Cube'] as const
export type AoE = typeof AoEs[number]
// 1 round: '1 round' or '1 rd.'
export const CastingTimes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Rounds', 'Turns', 'Special'] as const
export type CastingTime = typeof CastingTimes[number]
// 'Half' can also be '1/2'
export const SavingThrows = ['None', 'Half', 'Negate', 'Special'] as const
export type SavingThrow = typeof SavingThrows[number]
// Homebrew: 'Koibu', 'Zweihard', 'Divan' for now but will change later
export const Sources = ['PHB', 'ToM', 'S&M', 'Homebrew', ] as const
export type Source = typeof Sources[number]

export const isGod = (tbd: string): tbd is God => includes(gods, tbd)

export const gods = ["Aaris" ,
    "Agepa" ,
    "Astair" ,
    "Bellum" ,
    "Chis" ,
    "Efra" ,
    "Felumbra" ,
    "Illumis" ,
    "Jexel" ,
    "Malkis" ,
    "Martha" ,
    "Mathis/Safia" ,
    "Matrigal" ,
    "Nadinis" ,
    "Nerual" ,
    "Ponos" ,
    "Quantarious" ,
    "Relkor" ,
    "Reluna" ,
    "Sayor" ,
    "Solt" ,
    "Tempos" ,
    "Terrasa" ,
    "Terrin" ,
    "Velmontarious" ,
    "Velthara",
    "Voraci" ,
    "Womaatoar"] as const

export type God = 
    "Aaris" |
    "Agepa" |
    "Astair" |
    "Bellum" |
    "Chis" |
    "Efra" |
    "Felumbra" |
    "Illumis" |
    "Jexel" |
    "Malkis" |
    "Martha" |
    "Mathis/Safia" |
    "Matrigal" |
    "Nadinis" |
    "Nerual" |
    "Ponos" |
    "Quantarious" |
    "Relkor" |
    "Reluna" |
    "Sayor" |
    "Solt" |
    "Tempos" |
    "Terrasa" |
    "Terrin" |
    "Velmontarious" |
    "Velthara"|
    "Voraci" |
    "Womaatoar"

    

export type Sphere =
  | "All"
  | "Animal"
  | "Astral"
  | "Chaos"
  | "Charm"
  | "Combat"
  | "Creation"
  | "Divination"
  | "Elemental"
  | "Guardian"
  | "Healing"
  | "Law"
  | "Necromantic"
  | "Numbers"
  | "Plant"
  | "Protection"
  | "Summoning"
  | "Sun"
  | 'Time'
  | "Thought"
  | "Travelers"
  | "War"
  | "Wards"
  | "Weather"
  | 'Air'
  | 'Earth'
  | 'Fire'
  | 'Water'

  export const Spheres = [
  "All"
  , "Animal"
  , "Astral"
  , "Chaos"
  , "Charm"
  , "Combat"
  , "Creation"
  , "Divination"
  , "Elemental"
  , "Guardian"
  , "Healing"
  , "Law"
  , "Necromantic"
  , "Numbers"
  , "Plant"
  , "Protection"
  , "Summoning"
  , "Sun"
  , 'Time'
  , "Thought"
  , "Travelers"
  , "War"
  , "Wards"
  , "Weather"
  , 'Air'
  , 'Earth'
  , 'Fire'
  , 'Water'
  ] as const
  