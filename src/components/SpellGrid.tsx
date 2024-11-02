import SuccinctSpell from '@/components/SuccinctSpell'
import { CastingClass } from '@/lib/types'
import { useContext, useTransition, useState, useEffect } from "react"
import { FilterContext, FilterContextType } from "@/context/FilterContext"
import { useSpellsQuery } from '@/gql/graphql'
import { DescriptionListContext, DescriptionListContextType } from '@/context/DescriptionListContext'


interface SpellListProps {
    // blur: boolean
    castingClass: CastingClass | null
}

export default function SpellGrid({castingClass}: SpellListProps) {
    const [, startTransition] = useTransition()
    const [done, setDone] = useState<boolean>(false)
    const filter = useContext(FilterContext) as FilterContextType
    const {data, fetchMore, loading} = useSpellsQuery({variables: {limit: 100, lvlCursor: null, nameCursor: null, castingClass}})
    const {addSpell} = useContext(DescriptionListContext) as DescriptionListContextType

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
                        nameCursor: data!.spells.spells[data!.spells.spells.length-1].name,
                        castingClass
                    }
                })
            })
        }
    },[done, setDone, fetchMore, startTransition, data, loading, castingClass])

    if(loading) return <div>loading</div>

    return <div className={`flex flex-wrap w-full overflow-auto flex-1`} >
        {data!.spells.spells.map(spell => filter.runFilters(spell) ? <SuccinctSpell key={spell.id} spell={spell} inspectSpell={addSpell} /> : '')} 
    </div>
}