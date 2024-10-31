import { AoEs, CastingTimes, components, dmgToTextConverter, Ranges, SavingThrows, schools, Sources } from "@/lib/types"
import { useContext, useState } from "react"
import { FilterContext, FilterContextType } from "@/app/context/FilterContext"
import FilterButton, { ExistingFilters } from "./FilterButton"
import FilterButtonWithSpecialNeeds from "./FilterButtonWithSpecialNeeds"

interface NavBarProps {
    setSearchModalState: () => void
    setSpecModalState: () => void
    setGodModalState: () => void
}

export default function Navbar({setSearchModalState, setSpecModalState, setGodModalState}: NavBarProps) {
    const filters = useContext(FilterContext) as FilterContextType
    const [showFilters, setShowFilters] = useState<boolean>(false)
    const [showAoe, toggleAoe] = useState<boolean>(false)
    const [showCT, toggleCT] = useState<boolean>(false)
    const [showComponents, toggleComponents] = useState<boolean>(false)
    const [showDmg, toggleDmg] = useState<boolean>(false)
    const [showRange, toggleRange] = useState<boolean>(false)
    const [showST, toggleST] = useState<boolean>(false)
    const [showSource, toggleSource] = useState<boolean>(false)

    return <div className="hidden z-40 w-full lg:block" >
     <div className={`w-100% flex flex-row gap-2 ${showFilters ?  '' : 'border-b'} border-slate-900/10 p-2`} >
        {/* <Burger h='24px' /> */}
        <button onClick={setSearchModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Quick search... <span className="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl + K</span>
        </button>
        <button onClick={setGodModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Diety 
        </button>
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Specializations 
        </button>
            {schools.map(school => <button onClick={() => filters.uSchools(school)} className={`bg-${filters.schools.includes(school) ? 'bg-gray-100' : school} p-2 rounded-md`} key={school}>{school}</button>)}
        <button onClick={() => filters.uClasses('Wizard')} className={`hidden ${filters.classes.includes('Wizard') ? 'bg-Wizard' : ''} lg:flex items-center text-sm leading-6 text-black rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300`}>
            Wizard 
        </button>
        <button onClick={() => filters.uClasses('Cleric')} className={`hidden ${filters.classes.includes('Cleric') ? 'bg-Cleric' : ''} lg:flex items-center text-sm leading-6 text-black rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300`}>
            Cleric 
        </button>
        <button onClick={() => setShowFilters(!showFilters)} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Show more filters 
        </button>
        <button onClick={filters.resetFilters} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Reset Filters
        </button>
        <div className="ml-auto flex gap-2">
        <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Log in 
        </button>
        <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Sign up
        </button>
        </div>
    </div>
    <div className={`${showFilters ? 'grid' : 'hidden'} grid-cols-2 border-b border-slate-900/10 z-40 w-full`} >
    <div className={`flex flex-row justify-center gap-2 p-2`} >
            <FilterButton name="AoE" options={AoEs} show={showAoe} toggle={toggleAoe} update={filters.uAoes} />
            <FilterButton name={'Casting Time'} options={CastingTimes} show={showCT} toggle={toggleCT} update={filters.uCastingTimes} />
            <FilterButton name={'Components'} options={components} show={showComponents} toggle={toggleComponents} update={(filters.uComponents as (s: string) => void)} />
            <FilterButtonWithSpecialNeeds show={showDmg} toggle={toggleDmg} update={filters.sDamaging} />
            <FilterButton name={'Range'} options={Ranges} show={showRange} toggle={toggleRange} update={filters.uRanges} />
            <FilterButton name={'Saving Throw'} options={SavingThrows} show={showST} toggle={toggleST} update={filters.uSavingThrows} />
            <FilterButton name={'Source'} options={Sources} show={showSource} toggle={toggleSource} update={filters.uSources} />
    </div>
    <div className={`flex flex-row justify-start gap-2 p-2`}>
        <ExistingFilters last={filters.aoes[filters.aoes.length-1]} show={filters.aoes.length !== 0} name="AoE" category={filters.aoes} reset={() => filters.sAoes([])} />
        <ExistingFilters last={filters.castingTimes[filters.castingTimes.length-1]} show={filters.castingTimes.length !== 0} name="Casting Time" category={filters.castingTimes} reset={() => filters.sCastingTimes([])} />
        <ExistingFilters last={filters.components[filters.components.length-1]} show={filters.components.length !== 0} name='Components' category={filters.components} reset={() => filters.sComponents([])} />
        <button className={`${filters.damaging !== 0 ? 'flex' : 'hidden'} text-[12px] place-items-center p-2 py-0 rounded-full border border-slate-200 bg-slate-100`} onClick={() => filters.sDamaging(0)}>{dmgToTextConverter(filters.damaging)}</button>
        <ExistingFilters last={filters.ranges[filters.ranges.length-1]} show={filters.ranges.length !== 0} name="Range" category={filters.ranges} reset={() => filters.sRanges([])} />
        <ExistingFilters last={filters.savingThrows[filters.savingThrows.length-1]} show={filters.savingThrows.length !== 0} name="Saving Throw" category={filters.savingThrows} reset={() => filters.sSavingThrows([])} />
        <ExistingFilters last={filters.sources[filters.sources.length-1]} show={filters.sources.length !== 0} name="Source" category={filters.sources} reset={() => filters.sSources([])} />
    </div>
    </div>

    </div>
}