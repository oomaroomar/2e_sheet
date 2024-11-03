"use client"

import Navbar from "@/components/NavBar/NavBar";
import SearchModal from "@/components/ModalComponents/SearchModal";
import SpecModal from "@/components/ModalComponents/SpecModal";
import SpellDescriptions from "@/components/SpellDescriptionList";
import SpellGrid, { LoadingGrid } from "@/components/SpellGrid"
import { useWizardSpellsQuery } from "@/gql/graphql";
import { schools } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
  const [showSpecModal, setSpecModalState] = useState<boolean>(false)
  
  const {data, loading} = useWizardSpellsQuery({variables: {limit: 254740991, lvlCursor: null, nameCursor: null}})
  
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
  <Navbar casterClass="Wizard" setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
  <div aria-label="main content" className="flex overflow-hidden h-screen" >
    <div className="flex-1 overflow-auto" >
      <SpellDescriptions />
    </div>
    <div className={`flex-1 overflow-auto  ${[showSearchModal, showSpecModal].every(b => b===false) ? '' : 'blur-sm'}`}>
      {loading ? <LoadingGrid/> :<SpellGrid loading={loading} spells={data!.wizardSpells.spells} /> }
    </div>
  </div>
  {loading ? '' :<SearchModal spells={data!.wizardSpells.spells} setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} /> }
  <SpecModal schools={schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
  </div>
}
