import SpellCard from '@/components/SpellCard'
import { SpellLite } from '@/lib/types'
import { useContext, useTransition, useState, useEffect } from "react"
import { FilterContext, FilterContextType } from "@/app/context/FilterContext"
import { useSpellsQuery } from '@/gql/graphql'


interface SpellListProps {
    inspectSpell: (spell: SpellLite) => void
    blur: boolean
}

export default function SpellList({inspectSpell, blur}: SpellListProps) {
    const [, startTransition] = useTransition()
    const [done, setDone] = useState<boolean>(false)
    const filter = useContext(FilterContext) as FilterContextType
    const {data, fetchMore, loading} = useSpellsQuery({variables: {limit: 100, lvlCursor: null, nameCursor: null}})

    // most retarded pagination known to man but unironically works here maybe once apollo fixes their networkStatus thing
    // (or i learn to use it) i'll change to something more sophisticated
    useEffect(() => {
        if(!loading && !done) {
            setDone(true)
            startTransition(() => {
                fetchMore({
                    variables: {
                        limit: 254740991, // some big number that isn't too big to destroy everything
                        lvlCursor: data!.spells.spells[data!.spells.spells.length-1].level,
                        nameCursor: data!.spells.spells[data!.spells.spells.length-1].name
                    }
                })
            })
        }
    },[done, setDone, fetchMore, startTransition, data, loading])

    if(loading) return <div>loading</div>

    
   
    return <div className={`flex flex-wrap w-3/5 overflow-auto flex-1 ${blur ? 'blur-sm' : ''}`} >
        {data!.spells.spells.map(spell => filter.runFilters(spell) ? <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} /> : '')} 
    </div>

}