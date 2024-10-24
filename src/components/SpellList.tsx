import SpellCard from '@/components/SpellCard'
import { SpellsQuery } from '@/gql/operations'
import { Spell } from '@/gql/types'

interface SpellListProps {
    inspectSpell: (spell: Spell) => void
    data: SpellsQuery | undefined
    fetching: boolean
}


export default function SpellList({inspectSpell, data, fetching}: SpellListProps) {

    if(fetching) return <div>hold</div>

    return <div className="flex flex-wrap w-3/5 overflow-auto flex-1" >
        {data?.spells.map(spell => <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} />)} 
    </div>

}