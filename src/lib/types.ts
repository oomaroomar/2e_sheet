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

export type school = "Alteration" 
    | "Abjuration" 
    | "Conjuration" 
    | "Divination" 
    | "Enchantment" 
    | "Evocation" 
    | "Illusion" 
    | "Necromancy"

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
