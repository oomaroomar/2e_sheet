import { components, schools } from "@/lib/types"
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

    return <div className="hidden z-50 w-full lg:block"  >
     <div className="w-100% flex flex-row gap-2 border-b border-slate-900/10 p-2" >
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
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Wizard 
        </button>
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Cleric 
        </button>
        <button onClick={() => setShowFilters(!showFilters)} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Show more filters 
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
    <div className={`w-100% ${showFilters ? 'flex' : 'hidden'} flex-row gap-2 border-b border-slate-900/10 p-2`} >
        <FilterButton name={'AoE'} />
        <FilterButton name={'Casting Time'} />
        <FilterButton name={'Components'} />
        <FilterButton name={'Damage'} />
        <FilterButton name={'Range'} />
        <FilterButton name={'Saving Throw'} />
        <FilterButton name={'Source'} />
        <FilterButton name={'Sphere'} />
    </div>
    </div>
}