import SpellCard from '@/components/SpellCard'
import { SpellsQuery } from '@/gql/operations'
import { SpellLite } from '@/lib/types'


interface SpellListProps {
    inspectSpell: (spell: SpellLite) => void
    data: SpellsQuery | undefined
    fetching: boolean
    blur: boolean
    filter: string[]
}


export default function SpellList({inspectSpell, data, fetching, blur, filter}: SpellListProps) {



    if(fetching) return <div>hold</div>

    return <div className={`flex flex-wrap w-3/5 overflow-auto flex-1 ${blur ? 'blur-sm' : ''}`} >
        {data?.spells.map(spell => filter.includes(spell.school) ? '' : <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} />)} 
    </div>

}