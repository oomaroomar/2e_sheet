import Navbar from "@/components/NavBar/NavBar";
import SearchModal from "@/components/ModalComponents/SearchModal";
import SpecModal from "@/components/ModalComponents/SpecModal";
import SpellDescriptions from "@/components/Index/SpellDescriptionList";
import SpellGrid, { LoadingGrid } from "@/components/Index/SpellGrid"
import { gods, schools, SpellLite } from "@/lib/types";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext, UserContextType } from "@/context/userContext";

interface SpellPageProps {
    spells: SpellLite[] | undefined
    loading: boolean
    children: React.ReactNode
    castingClass?: "Cleric" | "Wizard"
}

export default function SpellPage({spells, loading, children, castingClass}: SpellPageProps) {
  const [showSearchModal, setSearchModalState] = useState<boolean>(false)
  const [showSpecModal, setSpecModalState] = useState<boolean>(false)
  
  const { adminSetter } = useContext(UserContext) as UserContextType
  console.log(adminSetter)
  // adminSetter(true)

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
  <Navbar castingClass={castingClass} setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}>
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
  <SpecModal schools={castingClass === "Cleric" ? gods : schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
  </div>
}
