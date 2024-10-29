import { schools } from "@/lib/types"
import { useContext, useState } from "react"
import { FilterContext, FilterContextType } from "@/app/context/FilterContext"
import FilterButton from "./FilterButton"

interface NavBarProps {
    setSearchModalState: () => void
    setSpecModalState: () => void
}

export default function Navbar({setSearchModalState, setSpecModalState}: NavBarProps) {
    const filters = useContext(FilterContext) as FilterContextType
    const [showFilters, setShowFilters] = useState<boolean>(false)
    const [showAoe, toggleAoe] = useState<boolean>(false)

    return <div className="hidden z-40 w-full lg:block" >
     <div className={`w-100% flex flex-row gap-2 ${showFilters ?  '' : 'border-b'} border-slate-900/10 p-2`} >
        {/* <Burger h='24px' /> */}
        <button onClick={setSearchModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Quick search... <span className="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl + K</span>
        </button>
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Diety 
        </button>
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Specializations 
        </button>
            {schools.map(school => <button onClick={() => filters.uSchools(school)} className={`bg-${filters.schools.includes(school) ? 'bg-gray-100' : school} p-2 rounded-md`} key={school}>{school}</button>)}
        <button onClick={() => filters.uClasses('Wizard')} className={`hidden ${filters.classes.includes('Wizard') ? '' : 'bg-Wizard'} lg:flex items-center text-sm leading-6 text-black rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300`}>
            Wizard 
        </button>
        <button onClick={() => filters.uClasses('Cleric')} className={`hidden ${filters.classes.includes('Cleric') ? '' : 'bg-Cleric'} lg:flex items-center text-sm leading-6 text-black rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300`}>
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
        <div>
        <button onClick={() => toggleAoe(!showAoe)} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
                AoE
        </button>
        {showAoe ? <div className="absolute z-50 ">
            <button onClick={() => filters.uAoes('special')} className="block m-2 ml-0 p-2 rounded-lg bg-blue-600">Special</button>
            <button onClick={() => filters.uAoes('1 creature')} className="block m-2 ml-0 p-2 rounded-lg bg-blue-600" >1 creature</button>
            <button onClick={() => filters.uAoes('radius')} className="block m-2 ml-0 p-2 rounded-lg bg-blue-600" >Radius</button>
            <button onClick={() => filters.uAoes('cube')} className="block m-2 ml-0 p-2 rounded-lg bg-blue-600">Cube</button>
             </div> : ''}
        </div>

        <FilterButton name={'Casting Time'} />
        <FilterButton name={'Components'} />
        <FilterButton name={'Damage'} />
        <FilterButton name={'Range'} />
        <FilterButton name={'Saving Throw'} />
        <FilterButton name={'Source'} />
        <FilterButton name={'Sphere'} />
    </div>
    <div className={`flex flex-row justify-start gap-2 p-2`}>
        {filters.aoes.map(aoe => <button onClick={() => filters.uAoes(aoe)} key={aoe} >{aoe}</button>)}
    </div>
    </div>

    </div>
}