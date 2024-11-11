"use client"

import Navbar from "@/components/NavBar/NavBar";
import SearchModal from "@/components/ModalComponents/SearchModal";
import SpellDescriptions from "@/components/Index/SpellDescriptionList";
import SpellGrid, { LoadingGrid } from "@/components/Index/SpellGrid"
import { useAllSpellsQuery } from "@/gql/graphql";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [showSpecModal, setSpecModalState] = useState<boolean>(false)
  
  const {data, loading} = useAllSpellsQuery({variables: {limit: 254740991, lvlCursor: null, nameCursor: null}})
  
  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
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
  <Navbar casterClass="All" setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
  <div aria-label="main content" className="flex overflow-hidden h-screen" >
    <div className="flex-1 overflow-auto" >
      <SpellDescriptions />
    </div>
    <div className={`flex-1 overflow-auto  ${[showSearchModal, showSpecModal].every(b => b===false) ? '' : 'blur-sm'}`}>
      {loading ? <LoadingGrid/>  :<SpellGrid loading={loading} spells={data!.allSpells.spells} /> }
    </div>
  </div>
  {loading ? '' : <SearchModal spells={data!.allSpells.spells} setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />}
  </div>
}
