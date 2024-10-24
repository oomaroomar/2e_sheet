import { useSpellsQuery } from "@/gql/spells.hooks"
import { Spell } from "@/gql/types"
import { useState, useCallback, useEffect } from "react"
import Navbar from "./NavBar"
import SearchModal from "./SearchModal"
import SpellInfo from "./SpellInfo"
import SpellList from "./SpellList"

export default function Everything() {
    
  const [spellList, setSpellList] = useState<Spell[]>([])

  const [showModal, setModalState] = useState<boolean>(false)

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if(event.ctrlKey === true) {
          if(event.key === 'k') {
            event.preventDefault()
            setModalState(!showModal)
          }
        }
        if(event.key === 'Escape') {
            setModalState(false)
        }
      },[showModal])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {
        document.removeEventListener('keydown', handleKeyPress)
        }
    },[handleKeyPress])

  
  const inspectSpell = (spell: Spell) => {
    const i = spellList.findIndex(s => s == spell)
    if(i == -1) {
      setSpellList([spell].concat(spellList))
    } else {
      setSpellList([spell].concat(spellList.toSpliced(i, 1)))
    }
  }
  
  const [{data, fetching}] = useSpellsQuery()

  return <div>
  <Navbar clicky={() => setModalState(!showModal)}/>
<div>
<div className="w-full h-lvh flex p-2" >
  <SpellList data={data} fetching={fetching} inspectSpell={inspectSpell} />
  {fetching ? '' : <SearchModal spells={data!.spells} setModalState={(ns: boolean) => setModalState(ns)} showModal={showModal} key={'search'} />}
  <div className="hidden lg:flex flex-1 flex-wrap w-1/6 overflow-auto max-w-3xl p-4 pr-20 align-self-end" >
    {spellList.map(spell => <SpellInfo spell={spell} key={spell.id} />)}
  </div>
</div>
</div>
</div>
}