"use client"

import SpellPage from "@/components/Index/SpellPage";
import { Character, useMyCharactersQuery, useSpellbookQuery} from "@/gql/graphql";
import WizardNavbarContent from "@/components/NavBar/WizardNavbarContent";
import CharacterSearchModal from "@/components/ModalComponents/CharacterModal";
import { Usable, use, useContext, useState } from "react";
import { CharacterContext, CharacterContextType } from "@/context/CharacterContext";

export default function Home({params}: {params: Usable<unknown>}) {

    const book = use(params)
  
  const [showModal, flipModal] = useState(false)
  const [limitSpells, setLimitSpells] = useState(false)
  const {data, loading} = useSpellbookQuery({variables: {bookId: parseInt((book as {id: string}).id)}})
  const {data: charData, loading: charLoading} = useMyCharactersQuery()
  const {charId} = useContext(CharacterContext) as CharacterContextType

  return <SpellPage loading={loading} spells={limitSpells ? charData?.myCharacters
    ?.find(char => char.id === charId)?.learnedSpells.map(ls => ls.spell)
  : data?.spellbook.spellPages?.map(sp => sp.spell)}> 
    <WizardNavbarContent limit={limitSpells} toggleLimit={() => setLimitSpells(!limitSpells)} currentChar={charData?.myCharacters?.find(char => char.id === charId)?.name} viewCharacters={() => flipModal(true)} />
    {charLoading ? null : <CharacterSearchModal closeModal={() => flipModal(false)} showModal={showModal} characters={charData?.myCharacters as Character[]}/>}
  </SpellPage>
}

