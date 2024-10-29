import { Components, DmgOption, School, Spell, Sphere } from "@/lib/types"
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
    uClasses: (c: string) => void
    sClasses: (ca: string[]) => void

    spheres: Sphere[]
    uSpheres: (c: Sphere) => void
    sSpheres: (ca: Sphere[]) => void
    
    damaging: DmgOption
    sDamaging: (d: DmgOption) => void

    runFilters: (s: Spell) => boolean
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
    const [classes, uClasses, sClasses] = useFilter<string>()
    const [damaging, sDamaging] = useState<DmgOption>(0)
    const [spheres, uSpheres, sSpheres] = useFilter<Sphere>()

    function runFilters(spell: Spell): boolean {
        // Some high IQ engineering right here
        if((schools as string[]).includes(spell.school)) return false
        if(ranges.includes(spell.range)) return false
        if(aoes.includes(spell.aoe)) return false
        if(castingTimes.includes(spell.castingTime)) return false
        if(savingThrows.includes(spell.savingThrow)) return false
        if(sources.includes(spell.source)) return false
        if(classes.includes(spell.class)) return false
        
        if(spell.somatic && components.includes('somatic')) return false  
        if(spell.verbal && components.includes('verbal')) return false
        if(spell.material && components.includes('material')) return false

        if(spell.damage === '' && damaging == 1) return false
        if(spell.damage !== '' && damaging == -1) return false

        return true
    }

    return <FilterContext.Provider value={{schools, uSchools, sSchools, ranges, uRanges, sRanges, aoes, uAoes, sAoes, castingTimes, uCastingTimes, 
    sCastingTimes, savingThrows, uSavingThrows, sSavingThrows, sources, uSources, sSources, components, uComponents, sComponents, classes, uClasses, 
    sClasses, damaging, sDamaging, runFilters, spheres, uSpheres, sSpheres}}>
        {children}
    </FilterContext.Provider>
}