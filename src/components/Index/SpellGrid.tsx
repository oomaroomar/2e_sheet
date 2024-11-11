import SuccinctSpell from '@/components/Index/SuccinctSpell'
import { SpellLite } from '@/lib/types'
import { useContext} from "react"
import { FilterContext, FilterContextType } from "@/context/FilterContext"
import { DescriptionListContext, DescriptionListContextType } from '@/context/DescriptionListContext'


interface SpellListProps {
    spells: SpellLite[]
    loading: boolean
}

export default function SpellGrid({spells}: SpellListProps) {
    const filter = useContext(FilterContext) as FilterContextType
    // Added pagination but in retrospect doesn't seem to make sense. Maybe will need later
    const {addSpell} = useContext(DescriptionListContext) as DescriptionListContextType

    return <div className={`flex flex-wrap w-full overflow-auto flex-1`} >
        {spells.map(spell => filter.runFilters(spell) ? <SuccinctSpell key={spell.id} spell={spell} inspectSpell={addSpell} /> : '')} 
    </div>
}

export function LoadingGrid() {
    return <div className="text-center h-full text-7xl text-slate-300 flex place-content-center place-items-center" >
    <div className="pb-60">
            loading
        </div>
    </div>
}