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
            setFilter(filter.concat([u]))
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

    majorSpheres: Sphere[]
    uMSpheres: (c: Sphere) => void
    sMSpheres: (ca: Sphere[]) => void

    minorSpheres: Sphere[]
    umSpheres: (c: Sphere) => void
    smSpheres: (ca: Sphere[]) => void
    
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
    const [minorSpheres, umSpheres, smSpheres] = useFilter<Sphere>()
    const [majorSpheres, uMSpheres, sMSpheres] = useFilter<Sphere>()

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
        smSpheres([])
        sMSpheres([])
    }

    // takes a spells aoe as input
    // returns true when we SHOULD filter out a spell based on AoE
    function explicitAoeFilter(spell: SpellLite): boolean{
        const aoe = spell.aoe.toLocaleLowerCase()
        if(aoes.some(a => aoe.includes(a.toLowerCase()))) {
            console.log(spell, 'matched filter')
            return true
        } 
        // Data isn't named with a convention, so need to add this stuff
        if(aoes.includes('1 creature')) {
            if(aoe.includes('1 animal')) return true
            if(aoe.includes('1 person')) return true
            if(aoe.includes('self')) return true
            if(aoe.includes('the caster')) return true
        }
        return false
    }

    function explicitSTFilter(s: string): boolean {
        if(savingThrows.length === 0) return false
        if(savingThrows.includes(s)) return false
        if(savingThrows.includes('Half') && s === '1/2') return false
        return true
    }

    // Return true when spell should be filtered
    function sphereFilter(sp: Sphere[], lvl: number): boolean {
        if(majorSpheres.length === 0 && 0 === minorSpheres.length) return false
        if(sp[0] === 'All') return false
        if((sp.filter(s => majorSpheres.includes(s)).length !== 0) 
            || (lvl <= 3 && sp.filter(s => minorSpheres.includes(s)).length !== 0)
            ) return false
        return true
    }

    // Filter was flipped i.e. things that should be filtered are not filtered and vice versa :)
    function runFilters(spell: SpellLite): boolean {
        // Some high IQ engineering right here
        if((schools as string[]).includes(spell.school)) return false
        if(ranges.length !== 0 && !ranges.includes(spell.range)) return false
        if(aoes.length !== 0 && !explicitAoeFilter(spell)) return false
        if(castingTimes.length !== 0 && !castingTimes.includes(spell.castingTime)) return false
        if(explicitSTFilter(spell.savingThrow)) return false
        if(sources.length !== 0 && !sources.includes(spell.source)) return false
        if(components.length !== 0) {
            if(spell.somatic && !components.includes('somatic')) return false  
            if(spell.verbal && !components.includes('verbal')) return false
            if(spell.material && !components.includes('material')) return false
        }
        // This one is weird
        if(classes.length !== 0 && !(classes as string[]).includes(spell.class)) return false
        if(spell.spheres !== null && spell.spheres?.length !== 0) {
            if(sphereFilter((spell.spheres as Sphere[]), spell.level)) return false
        }
        
        if(spell.damage === '' && damaging == 1) return false
        if(spell.damage !== '' && damaging == -1) return false

        return true
    }

    return <FilterContext.Provider value={{schools, uSchools, sSchools, ranges, uRanges, sRanges, aoes, uAoes, sAoes, castingTimes, uCastingTimes, 
    sCastingTimes, savingThrows, uSavingThrows, sSavingThrows, sources, uSources, sSources, components, uComponents, sComponents, classes, uClasses, 
    sClasses, damaging, sDamaging, runFilters, majorSpheres, uMSpheres, sMSpheres, minorSpheres, umSpheres, smSpheres, resetFilters}}>
        {children}
    </FilterContext.Provider>
}