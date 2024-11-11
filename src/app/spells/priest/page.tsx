"use client"

import PriestNavbarContent from "@/components/NavBar/PriestNavbarContent";
import SpellPage from "@/components/Index/SpellPage";
import { useClericSpellsQuery } from "@/gql/graphql";

export default function Home() {
  
  const {data, loading} = useClericSpellsQuery({variables: {limit: 254740991, lvlCursor: null, nameCursor: null}})
  
  return <SpellPage loading={loading} spells={data?.clericSpells.spells}>
    <PriestNavbarContent></PriestNavbarContent>
  </SpellPage>
  
}
