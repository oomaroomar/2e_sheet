import { components, schools } from "@/lib/constants"
import { Components } from "@/lib/types"

interface NavBarProps {
    setSearchModalState: () => void
    setSpecModalState: () => void
    setSchoolFilter: (s: string) => void
    schoolFilter: string[]
    setCFilter: (c: Components) => void
    cFilter: Components[]
}

export default function Navbar({setSearchModalState, setSchoolFilter, schoolFilter, setSpecModalState, cFilter, setCFilter}: NavBarProps) {
    return <div className="hidden z-50 w-100% lg:flex flex-row gap-2 border-b border-slate-900/10 p-2" >
        {/* <Burger h='24px' /> */}
        <button onClick={setSearchModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Quick search... <span className="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl + K</span>
        </button>
        <button onClick={setSpecModalState} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Specializations 
        </button>
            {schools.map(school => <button onClick={() => setSchoolFilter(school)} className={`bg-${schoolFilter.includes(school) ? 'bg-gray-100' : school} p-2 rounded-md`} key={school}>{school}</button>)}
            {components.map(c => <button onClick={() => setCFilter(c)} className={`${cFilter.includes(c) ? 'bg-slate-100' : 'bg-white'} p-2 rounded-md`} key={c}>{c}</button>)}
        
        <div className="ml-auto flex gap-2">
        <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Log in 
        </button>
        <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Sign up
        </button>
        </div>
    </div>
}