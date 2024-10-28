import Magnifier from "@/svgs/Magnifier"
import { FormEvent, useCallback, useEffect, useRef, useState, useContext } from "react"
import Fuse from 'fuse.js'
import { School, schools } from "@/lib/types"
import { specFilters } from "@/lib/constants"
import SchoolCard from "./SchoolCard"
import { FilterContext, FilterContextType } from "@/app/context/FilterContext"


interface SearchModalProps {
    showModal: boolean
    setModalState: (ns: boolean) => void
}

export default function SpecModal({showModal, setModalState}:SearchModalProps) {

    const modalRef = useRef<HTMLInputElement>(null)
    const [searchPattern, setSearchPattern] = useState<string>('')

    const {sSchools} = useContext(FilterContext) as FilterContextType

    const fuse = new Fuse(schools)

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if(event.key === 'Escape') {
            if(searchPattern === '') {
                setModalState(false)
            } else {
                setSearchPattern('')
            }
        }
      },[setModalState, setSearchPattern, searchPattern])

    useEffect(() => {
        const checkClickOutside = (e: MouseEvent) => {
            if(showModal && !modalRef?.current?.contains(e.target as Node)) {
                setModalState(false)
            }
        }
        document.addEventListener('mousedown', checkClickOutside)
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [showModal, setModalState, handleKeyPress])

    const setFilter = (s: School) => {
        sSchools(specFilters[s])
    }

    const handleEnter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFilter(fuse.search(searchPattern)[0].item)
        setModalState(false)
    }


    if(!showModal) return null
    
    return <div className="h-screen w-full fixed top-0 mx-auto left-0 z-40 hidden lg:flex flex-col p-12vh">
        <div ref={modalRef} className="mx-auto max-h-full rounded-lg bg-white my-0 w-full max-w-3xl flex flex-col shadow-2xl shadow-black" >
            <header onSubmit={handleEnter} className="px-4 py-0 relative flex items-center" >
                <form className="appearance-none flex items-center flex-auto" >
                    <label><Magnifier/></label>
                    <input onChange={e => setSearchPattern(e.target.value)} autoFocus={true} className="outline-none appearance-none w-full h-14 ml-3 mr-4 flex" type="search" placeholder="Search spells" spellCheck='false' autoCapitalize="false" autoCorrect="false" autoComplete="off" />
                </form>
                <button>
                    Cancel
                </button>
            </header>
            <div className="overflow-auto flex flex-auto px-2" >
                <div className="longlist w-full pb-6">
                {searchPattern === '' ? schools.map(school => <SchoolCard setFilter={setFilter} school={school} key={school}  /> ) 
                : fuse.search(searchPattern).map(school => <SchoolCard setFilter={setFilter} school={school.item} key={school.item}  /> )}
                </div>
            </div>
        </div>
    </div>
}