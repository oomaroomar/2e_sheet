"use client"

import Navbar from "@/components/NavBar";
import SearchModal from "@/components/SearchModal";
import SpecModal from "@/components/SpecModal";
import SpellDescriptionList from "@/components/SpellDescriptionList";
import SpellGrid from "@/components/SpellGrid"
import { gods } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
  const [showGodModal, setGodModalState] = useState<boolean>(false)
    
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

  return <div>
          <Navbar setSpecModalState={() => setGodModalState(!showGodModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
            <div>
            <SpellDescriptionList />
              <div className={`${[showSearchModal, showGodModal].every(b => b===false) ? '' : 'blur-sm'}`}>
              <SpellGrid castingClass={'Wizard'} />
              </div>
          </div>
        <SearchModal setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />
      <SpecModal schools={gods} setModalState={setGodModalState} showModal={showGodModal}  />

  </div>
}
