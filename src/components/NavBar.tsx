const schools = [
    "Alteration",
    "Abjuration" ,
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy"
]

interface NavBarProps {
    clicky: () => void
}

export default function Navbar({clicky}: NavBarProps) {
    return <div className="hidden z-50 w-100% lg:flex flex-row gap-2 border-b border-slate-900/10 p-2" >
        {/* <Burger h='24px' /> */}
        <button onClick={() => clicky()} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Quick search... <span className="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl + K</span>
        </button>
        <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            Specializations 
        </button>
            {schools.map(school => <button className={`bg-${school} p-2 rounded-md`} key={school}>{school}</button>)}
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