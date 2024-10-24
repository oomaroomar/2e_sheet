import Magnifier from "@/svgs/Magnifier"
import { useEffect, useRef, useState } from "react"
import Fuse from 'fuse.js'
import { Spell } from "@/gql/types"

interface SearchModalProps {
    showModal: boolean
    setModalState: (ns: boolean) => void
    spells: Spell[]
}

export default function SearchModal({showModal, setModalState, spells}:SearchModalProps) {

    const modalRef = useRef<HTMLInputElement>(null)
    const [searchPattern, setSearchPattern] = useState<string>('')

    const fuse = new Fuse(spells, {keys: ['name']})

    useEffect(() => {
        const checkClickOutside = (e: MouseEvent) => {
            if(showModal && !modalRef?.current?.contains(e.target as Node)) {
                setModalState(false)
            }
        }
        document.addEventListener('mousedown', checkClickOutside)
        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
        }
    }, [showModal, setModalState])

    if(!showModal) return null
    
    return <div className="h-screen w-2/3 fixed top-0 left-0 z-40 hidden lg:flex flex-col p-12vh pl-0">
        <div  ref={modalRef} className="mx-auto max-h-full rounded-lg bg-white my-0 w-full max-w-3xl flex flex-col" >
            <header className="px-4 py-0 relative flex items-center" >
                <form className="flex items-center flex-auto" >
                    <label><Magnifier/></label>
                    <input onChange={e => setSearchPattern(e.target.value)} autoFocus={true} className="outline-none appearance-none w-full h-14 ml-3 mr-4 flex" type="search" placeholder="Search spells" spellCheck='false' autoCapitalize="false" autoCorrect="false" autoComplete="off" />
                </form>
                <button>
                    Cancel
                </button>
            </header>
            <div className="overflow-auto flex flex-auto" >
                <div className="longlist pb-6">
                {fuse.search(searchPattern).map(spell => <section key={spell.item.id}>{spell.item.name}</section>)}
                </div>
            </div>
        </div>
    </div>
}