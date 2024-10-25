import SpellCard from '@/components/SpellCard'
import { SpellsQuery } from '@/gql/operations'
import { Components, SpellLite } from '@/lib/types'

interface SpellListProps {
    inspectSpell: (spell: SpellLite) => void
    data: SpellsQuery | undefined
    fetching: boolean
    blur: boolean
    sFilter: string[]
    cFilter: Components[]
}



export default function SpellList({inspectSpell, data, fetching, blur, sFilter, cFilter}: SpellListProps) {

    const validComponents = (s: boolean, v:boolean, m: boolean): boolean => {
        if(s && !cFilter.includes('somatic')) return false
        if(v && !cFilter.includes('verbal')) return false
        if(m && !cFilter.includes('material')) return false
        return true
    }

    if(fetching) return <div>hold</div>

    return <div className={`flex flex-wrap w-3/5 overflow-auto flex-1 ${blur ? 'blur-sm' : ''}`} >
        {data?.spells.map(spell => (sFilter.includes(spell.school) || !validComponents(spell.somatic, spell.verbal, spell.material)) ? '' : <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} />)} 
    </div>

}