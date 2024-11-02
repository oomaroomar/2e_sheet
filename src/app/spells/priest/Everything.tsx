import { useState, useCallback, useEffect } from "react"
import Navbar from "@/components/NavBar"
import SearchModal from "@/components/SearchModal"
import VerboseSpell from "@/components/VerboseSpell"
import SpellList from "@/components/SpellGrid"
import SpecModal from "@/components/SpecModal"
import { gods, schools, SpellLite } from "@/lib/types"


export default function Everything() {
    
  const [spellList, setSpellList] = useState<number[]>([])

  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
  const [showGodModal, setGodModalState] = useState<boolean>(false)
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

  
  return <div className="h-screen flex flex-col overflow-hidden">
    <Navbar setGodModalState={() => setGodModalState(!showSearchModal)} setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
      <div className="w-full grow overflow-auto flex p-2" >
        <div className="hidden w-1/2 overflow-auto p-2 pl-20 pr-10 align-self-end lg:grid grid-cols-1" >
          {spellList.map(id => <VerboseSpell spellId={id} key={id} />)}
        </div>
        <SpellList castingClass={'Cleric'} blur={showSearchModal || showSpecModal} inspectSpell={inspectSpell} />
      </div>
    <SearchModal inspectSpell={inspectSpell} setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />
    <SpecModal schools={schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
    <SpecModal schools={gods} setModalState={setGodModalState} showModal={showGodModal}  />
  </div>
}