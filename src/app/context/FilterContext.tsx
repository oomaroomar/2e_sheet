import { CastingClass, Components, DmgOption, School, SpellLite, Sphere } from "@/lib/types"
import { createContext, useState } from "react"

function useFilter <T>(): [T[], (u: T) => void, (f: T[]) => void] {
    const [filter, setFilter] = useState<T[]>([])

    const saveFilter = (f: T[]): void => {
        setFilter(f)
    }

    const updateFilter = (u: T): void => {
        const i = filter.findIndex(f => f === u)
        if (i === -1) {
            setFilter([u].concat(filter))
        } else {
            setFilter(filter.toSpliced(i,1))
        }
    }

    return [filter, updateFilter, saveFilter]
}

export type FilterContextType = {
    schools: School[]
    uSchools: (s: School) => void
    sSchools: (sa: School[]) => void
    
    ranges: string[]
    uRanges: (r: string) => void
    sRanges: (ra: string[]) => void

    aoes: string[]
    uAoes: (a: string) => void
    sAoes: (aa: string[]) => void
    
    castingTimes: string[]
    uCastingTimes: (ct: string) => void
    sCastingTimes: (cta: string[]) => void

    savingThrows: string[]
    uSavingThrows: (s: string) => void
    sSavingThrows: (sa: string[]) => void

    sources: string[]
    uSources: (s: string) => void
    sSources: (sa: string[]) => void

    components: Components[]
    uComponents: (c: Components) => void
    sComponents: (ca: Components[]) => void

    classes: string[]
    uClasses: (c: CastingClass) => void
    sClasses: (ca: CastingClass[]) => void

    spheres: Sphere[]
    uSpheres: (c: Sphere) => void
    sSpheres: (ca: Sphere[]) => void
    
    damaging: DmgOption
    sDamaging: (d: DmgOption) => void

    runFilters: (s: SpellLite) => boolean
    
    resetFilters: () => void
}

export const FilterContext = createContext<FilterContextType | null>(null)


export const FilterProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [schools, uSchools, sSchools] = useFilter<School>()
    const [ranges, uRanges, sRanges] = useFilter<string>()
    const [aoes, uAoes, sAoes] = useFilter<string>()
    const [castingTimes, uCastingTimes, sCastingTimes] = useFilter<string>()
    const [savingThrows, uSavingThrows, sSavingThrows] = useFilter<string>()
    const [sources, uSources, sSources] = useFilter<string>()
    const [components, uComponents, sComponents] = useFilter<Components>()
    const [classes, uClasses, sClasses] = useFilter<CastingClass>()
    const [damaging, sDamaging] = useState<DmgOption>(0)
    const [spheres, uSpheres, sSpheres] = useFilter<Sphere>()

    function resetFilters() {
        sSchools([])
        sRanges([])
        sAoes([])
        sCastingTimes([])
        sSavingThrows([])
        sSources([])
        sComponents([])
        sClasses([])
        sDamaging(0)
        sSpheres([])
    }

    // takes a spells aoe as input
    // returns true when we SHOULD filter out a spell based on AoE
    function explicitAoeFilter(aoe: string): boolean{
        if(aoes.some(a => aoe.includes(a))) return true
        // Data isn't named with a convention, so need to add this stuff
        if(aoes.includes('1 creature')) {
            if(aoe.includes('1 animal')) return true
            if(aoe.includes('1 person')) return true
            if(aoe.includes('self')) return true
            if(aoe.includes('the caster')) return true
        }
        return false
    }

    function runFilters(spell: SpellLite): boolean {
        // Some high IQ engineering right here
        if((schools as string[]).includes(spell.school)) return false
        if(ranges.includes(spell.range)) return false
        if(explicitAoeFilter(spell.aoe.toLocaleLowerCase())) return false
        if(castingTimes.includes(spell.castingTime)) return false
        if(savingThrows.includes(spell.savingThrow)) return false
        if(sources.includes(spell.source)) return false
        if((classes as string[]).includes(spell.class)) return false
        
        if(spell.somatic && components.includes('somatic')) return false  
        if(spell.verbal && components.includes('verbal')) return false
        if(spell.material && components.includes('material')) return false

        if(spell.damage === '' && damaging == 1) return false
        if(spell.damage !== '' && damaging == -1) return false

        return true
    }

    return <FilterContext.Provider value={{schools, uSchools, sSchools, ranges, uRanges, sRanges, aoes, uAoes, sAoes, castingTimes, uCastingTimes, 
    sCastingTimes, savingThrows, uSavingThrows, sSavingThrows, sources, uSources, sSources, components, uComponents, sComponents, classes, uClasses, 
    sClasses, damaging, sDamaging, runFilters, spheres, uSpheres, sSpheres, resetFilters}}>
        {children}
    </FilterContext.Provider>
}