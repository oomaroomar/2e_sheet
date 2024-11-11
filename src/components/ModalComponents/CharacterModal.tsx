import Magnifier from "@/svgs/Magnifier"
import { FormEvent, useCallback, useContext, useEffect, useRef, useState, useTransition } from "react"
import Fuse from 'fuse.js'
import { Character } from "@/gql/graphql"
import { CharacterContext, CharacterContextType } from "@/context/CharacterContext"
import CharCard from "./CharacterCard"

interface SearchModalProps {
    showModal: boolean
    closeModal: () => void
    characters: Character[]
}

export default function CharacterSearchModal({showModal, closeModal, characters}:SearchModalProps) {

    const modalRef = useRef<HTMLInputElement>(null)
    const [searchPattern, setSearchPattern] = useState<string>('')
    const [, startTransition] = useTransition()
    const {setCharId} = useContext(CharacterContext) as CharacterContextType

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if(event.key === 'Escape') {
            if(searchPattern === '') {
                closeModal()
            } else {
                setSearchPattern('')
            }
        }
      },[closeModal, setSearchPattern, searchPattern])

    useEffect(() => {
        const checkClickOutside = (e: MouseEvent) => {
            if(showModal && !modalRef?.current?.contains(e.target as Node)) {
                closeModal()
            }
        }
        document.addEventListener('mousedown', checkClickOutside)
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [showModal, closeModal, handleKeyPress, modalRef])

    if(!showModal) return null


    const fuse = new Fuse(characters, {keys: ['name']})

    const handleEnter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCharId(fuse.search(searchPattern)[0].item.id)
        closeModal()
    }

    return <div className="h-screen w-full fixed top-0 mx-auto left-0 z-40 hidden lg:flex flex-col p-12vh">
        <div ref={modalRef} className="mx-auto max-h-full rounded-lg bg-white my-0 w-full max-w-3xl flex flex-col shadow-2xl shadow-black" >
            <header className="px-4 py-0 relative flex items-center" >
                <form onSubmit={handleEnter} className="appearance-none flex items-center flex-auto" >
                    <label><Magnifier/></label>
                    <input onChange={e => startTransition(() => setSearchPattern(e.target.value))} autoFocus={true} className="outline-none appearance-none w-full h-14 ml-3 mr-4 flex" type="search" placeholder="Search spells" spellCheck='false' autoCapitalize="false" autoCorrect="false" autoComplete="off" />
                </form>
                <button>
                    Cancel
                </button>
            </header>
            <div className="overflow-auto flex flex-auto px-2" >
                <div className="longlist w-full pb-6">
                {searchPattern !== '' ? fuse.search(searchPattern).map(({item}) => <CharCard character={item} key={item.id} onClick={() => setCharId(item.id)}/>)
                : characters.map(char => <CharCard character={char} key={char.id} onClick={() => setCharId(char.id)}/>)}
                </div>
            </div>
        </div>
    </div>
}