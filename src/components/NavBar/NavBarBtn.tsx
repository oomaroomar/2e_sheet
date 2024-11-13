interface BtnProps {
    onClick: () => void
    text: string
    text2?: string
}

export default function NavBarBtn({onClick, text, text2}: BtnProps) {
return <button onClick={onClick} className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md 
        ring-1 ring-pink-400/30 shadow-sm py-1.5 pl-2 pr-3 hover:ring-pink-400">
    {text}<span className="ml-auto pl-3 flex-none text-pink-400/90 text-xs font-semibold">{text2 ? text2 : ''}</span>
</button>
}