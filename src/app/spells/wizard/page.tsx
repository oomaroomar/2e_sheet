"use client"

import SpellPage from "@/components/Index/SpellPage";
import { Character, useMyCharactersQuery, useWizardSpellsQuery } from "@/gql/graphql";
import WizardNavbarContent from "@/components/NavBar/WizardNavbarContent";
import CharacterSearchModal from "@/components/ModalComponents/CharacterModal";
import { useContext, useState } from "react";
import { CharacterContext, CharacterContextType } from "@/context/CharacterContext";

export default function Home() {
  
  const [showModal, flipModal] = useState(false)
  const [limitSpells, setLimitSpells] = useState(false)
  const {data, loading} = useWizardSpellsQuery({variables: {limit: 254740991, lvlCursor: null, nameCursor: null}})
  const {data: charData, loading: charLoading} = useMyCharactersQuery()
  const {charId} = useContext(CharacterContext) as CharacterContextType

  return <SpellPage loading={loading} spells={limitSpells ? charData?.myCharacters
    ?.find(char => char.id === charId)?.learnedSpells.map(ls => ls.spell)
  : data?.wizardSpells.spells}> 
    <WizardNavbarContent limit={limitSpells} toggleLimit={() => setLimitSpells(!limitSpells)} currentChar={charData?.myCharacters?.find(char => char.id === charId)?.name} viewCharacters={() => flipModal(true)} />
    {charLoading ? null : <CharacterSearchModal closeModal={() => flipModal(false)} showModal={showModal} characters={charData?.myCharacters as Character[]}/>}
  </SpellPage>
}
