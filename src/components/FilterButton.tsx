interface FilterButtonProps {
    name: string
}

export default function FilterButton({name}: FilterButtonProps) {
    return <button className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            {name}
    </button>
}