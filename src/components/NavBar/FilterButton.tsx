import { useCallback, useEffect, useRef } from "react"

interface FilterButtonProps {
    name: string
    options: ReadonlyArray<string>
    show: boolean
    toggle: (b: boolean) => void
    update: (s: string) => void
}

export default function FilterButton({name, toggle, options, show, update}: FilterButtonProps) {

    const ref = useRef<HTMLInputElement>(null)

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if(event.key === 'Escape') {
            toggle(false)
        }
      },[toggle])

    const checkClickOutside = useCallback((e: MouseEvent) => {
        if(show && !ref?.current?.contains(e.target as Node)) {
            toggle(false)
            }
        }, [show, ref, toggle])

    useEffect(() => {
        document.addEventListener('mousedown', checkClickOutside)
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [show, toggle, handleKeyPress, ref, checkClickOutside])
    
    return  <div ref={ref} >
    <button onClick={() => toggle(!show)} className="w-24 hidden lg:flex place-items-center text-center text-[12px] leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
            {name}
    </button>
    {show ? <div className="absolute z-50 w-24 p-1 rounded-xl mt-2 bg-neutral-100 grid grid-cols-1">
        {options.map(option => <button key={option} onClick={() => update(option)} className="block text-sm py-3 hover:bg-neutral-200">{option}</button>)}
         </div> : ''}
    </div>
}

interface ExistingFiltersProps {
    category: ReadonlyArray<string>
    reset: () => void
    name: string
    show: boolean
    last: string
}

export function ExistingFilters({category, reset, name, show, last}: ExistingFiltersProps) {

    return <button className={`${show ? 'flex' : 'hidden'} text-[12px] place-items-center p-2 py-0 rounded-full border border-slate-200 bg-slate-100`} onClick={reset}>
        {name + ': '}{category.map(c => <div key={c} >{c}{c === last ? '': ','}</div>)}
    </button>
}