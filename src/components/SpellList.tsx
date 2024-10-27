import SpellCard from '@/components/SpellCard'
import { SpellLite } from '@/lib/types'
import { useContext } from "react"
import { FilterContext, FilterContextType } from "@/app/context/FilterContext"


interface SpellListProps {
    inspectSpell: (spell: SpellLite) => void
    data: SpellLite[]
    fetching: boolean
    blur: boolean
}



export default function SpellList({inspectSpell, data, fetching, blur}: SpellListProps) {

    const filter = useContext(FilterContext) as FilterContextType

    // const validComponents = (s: boolean, v:boolean, m: boolean): boolean => {
    //     if(s && !cFilter.includes('somatic')) return false
    //     if(v && !cFilter.includes('verbal')) return false
    //     if(m && !cFilter.includes('material')) return false
    //     return true
    // }

    if(fetching) return <div>hold</div>

    return <div className={`flex flex-wrap w-3/5 overflow-auto flex-1 ${blur ? 'blur-sm' : ''}`} >
        {data.map(spell => (filter.schools as string[]).includes(spell.school) ? '' : <SpellCard key={spell.id} spell={spell} inspectSpell={inspectSpell} />)} 
    </div>

}