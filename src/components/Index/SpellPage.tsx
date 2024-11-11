import Navbar from "@/components/NavBar/NavBar";
import SearchModal from "@/components/ModalComponents/SearchModal";
import SpecModal from "@/components/ModalComponents/SpecModal";
import SpellDescriptions from "@/components/Index/SpellDescriptionList";
import SpellGrid, { LoadingGrid } from "@/components/Index/SpellGrid"
import { schools, SpellLite } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

interface SpellPageProps {
    spells: SpellLite[] | undefined
    loading: boolean
    children: React.ReactNode
}

export default function SpellPage({spells, loading, children}: SpellPageProps) {
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

  return <div className="flex flex-col h-screen" >
  <Navbar setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}>
    {children}
  </Navbar>
  <div aria-label="main content" className="flex overflow-hidden h-screen" >
    <div className="flex-1 overflow-auto" >
      <SpellDescriptions />
    </div>
    <div className={`flex-1 overflow-auto  ${[showSearchModal, showSpecModal].every(b => b===false) ? '' : 'blur-sm'}`}>
      {(loading || !spells) ? <LoadingGrid/> :<SpellGrid loading={false} spells={spells} /> }
    </div>
  </div>
  {(loading || !spells) ? '' :<SearchModal spells={spells} setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} /> }
  <SpecModal schools={schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
  </div>
}
