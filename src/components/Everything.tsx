import { useState, useCallback, useEffect } from "react"
import Navbar from "./NavBar"
import SearchModal from "./SearchModal"
import SpellInfo from "./SpellInfo"
import SpellList from "./SpellList"
import SpecModal from "./SpecModal"
import { SpellLite } from "@/lib/types"

export default function Everything() {
    
  const [spellList, setSpellList] = useState<number[]>([])

  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
  const [showSpecModal, setSpecModalState] = useState<boolean>(false)

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
      if(event.ctrlKey === true) {
        if(event.key === 'k') {
          event.preventDefault()
          setSearchModalState(!showSearchModal)
        }
      }
    },[showSearchModal])

  

  useEffect(() => {
      document.addEventListener('keydown', handleKeyPress)
      return () => {
      document.removeEventListener('keydown', handleKeyPress)
      }
  },[handleKeyPress])

  
  const inspectSpell = (spell: SpellLite) => {
    const i = spellList.findIndex(id => id === spell.id)

    if(i === -1) {
      setSpellList([spell.id].concat(spellList))
    } else {
      setSpellList([spell.id].concat(spellList.toSpliced(i, 1)))
    }
  }

  
  return <div className="h-screen flex flex-col  overflow-hidden">
    <Navbar setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
      <div className="w-full grow overflow-auto flex p-2" >
        <div className="hidden lg:block w-1/2 overflow-auto p-4 pr-20 align-self-end" >
          {spellList.map(id => <SpellInfo spellId={id} key={id} />)}
        </div>
        <SpellList blur={showSearchModal || showSpecModal} inspectSpell={inspectSpell} />
      </div>
    <SearchModal inspectSpell={inspectSpell} setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />
    <SpecModal setModalState={setSpecModalState} showModal={showSpecModal}  />
  </div>
}