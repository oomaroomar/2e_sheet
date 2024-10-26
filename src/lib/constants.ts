// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSubset(arr1: any[], arr2: any[]) {
    arr1.forEach(e => {
        if(!arr2.includes(e)) {
            return false
        } 
    })
    return true

}

export interface SpecFilters {
    'Alteration': ['Abjuration', 'Necromancy']
    'Abjuration': ['Alteration', 'Illusion']
    'Conjuration': ['Divination', 'Evocation']
    'Divination': ['Conjuration']
    'Enchantment': ['Evocation', 'Necromancy']
    'Evocation': ['Enchantment', 'Conjuration']
    'Illusion': ['Necromancy', 'Evocation']
    'Necromancy': ['Illusion', 'Enchantment']
    '': []
}

export const specFilters: SpecFilters = {
    'Alteration': ['Abjuration', 'Necromancy'],
    'Abjuration': ['Alteration', 'Illusion'],
    'Conjuration': ['Divination', 'Evocation'],
    'Divination': ['Conjuration'],
    'Enchantment': ['Evocation', 'Necromancy'],
    'Evocation': ['Enchantment', 'Conjuration'],
    'Illusion': ['Necromancy', 'Evocation'],
    'Necromancy': ['Illusion', 'Enchantment'],
    '': []
}