import SpellCard from '@/components/SpellCard'
import { useSpellsQuery } from '@/gql/spells.hooks'
import { Spell } from '@/gql/types'

interface SpellListProps {
    inspectSpell: (spell: Spell) => void
}


export default function SpellList({inspectSpell}: SpellListProps) {
    const [{data, fetching}] = useSpellsQuery()

    if(fetching) return <div>hold</div>

    return <div className="flex flex-wrap w-3/5 overflow-auto flex-1" >
        {data?.spells.map(spell => <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} />)} 
    </div>

}