import { school } from "./types"

export const specFilters = {
    'Alteration': ['Abjuration', 'Necromancy'],
    'Abjuration': ['Alteration', 'Illusion'],
    'Conjuration': ['Divination', 'Evocation'],
    'Divination': ['Conjuration'],
    'Enchantment': ['Evocation', 'Necromancy'],
    'Evocation': ['Enchantment', 'Conjuration'],
    'Illusion': ['Necromancy', 'Evocation'],
    'Necromancy': ['Illusion', 'Enchantment']
}

export const schools: school[] = ['Abjuration',
    'Alteration',
    'Conjuration',
    'Divination',
    'Enchantment',
    'Evocation',
    'Illusion',
    'Necromancy']