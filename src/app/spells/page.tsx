"use client"

import SpellPage from "@/components/Index/SpellPage";
import { useAllSpellsQuery } from "@/gql/graphql";

export default function Home() {
  const {data, loading} = useAllSpellsQuery({variables: {limit: 254740991, lvlCursor: null, nameCursor: null}})
  
  return <SpellPage loading={loading} spells={data?.allSpells.spells}>
    <div></div>
  </SpellPage>
  
}
