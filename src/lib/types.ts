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
    spher?: string
};

export type SpellLite = Omit<Spell, "description">

export const components = ['material', 'somatic', 'verbal'] as const
export type Components = typeof components[number]

// -1 for non damaging
// 0 for don't care
// 1 for damaging
export const dmgOptions = [-1, 0, 1] as const
export type DmgOption = typeof dmgOptions[number]

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

export type castingClass = "Wizard" | "Cleric"

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
  | "Thought"
  | "Travelers"
  | "War"
  | "Wards"
  | "Weather"
