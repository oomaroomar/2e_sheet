"use client"

import Navbar from "@/components/NavBar";
import SearchModal from "@/components/SearchModal";
import SpecModal from "@/components/SpecModal";
import SpellDescriptions from "@/components/SpellDescriptionList";
import SpellGrid from "@/components/SpellGrid"
import { schools } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
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
  <Navbar setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
  <div aria-label="main content" className="flex overflow-hidden h-screen" >
    <div className="flex-1 overflow-auto" >
      <SpellDescriptions />
    </div>
    <div className={`flex-1 overflow-auto  ${[showSearchModal, showSpecModal].every(b => b===false) ? '' : 'blur-sm'}`}>
      <SpellGrid castingClass={'Wizard'} />
    </div>
  </div>
  <SearchModal setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />
  <SpecModal schools={schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
  </div>
}
