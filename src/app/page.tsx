"use client"
// import SpellCard from "@/components/SpellCard";
import SpellInfo from "@/components/SpellInfo";
import { Spell } from "@/lib/types";
import { useMemo, useState } from 'react'
import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next'
import SpellList from "@/components/SpellList";
import Test from '@/components/test'

export default function Home() {

  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: 'http://localhost:4000/',
      exchanges: [cacheExchange, ssr, fetchExchange],
      // Suspense causes infinity fetching for some reason
      // suspense: true,
    });
    return [client, ssr]
  }, [])

  const [spellList, setSpellList] = useState<Spell[]>([])

  const inspectSpell = (spell: Spell) => {
    if(!spellList.includes(spell))
      setSpellList([spell].concat(spellList))
  }


  return (
    <UrqlProvider client={client} ssr={ssr}>
    <div className="w-screen h-lvh flex p-2" >
      {/* <Test/> */}
      <SpellList inspectSpell={inspectSpell} />
      <div className="flex flex-1 flex-wrap w-2/5 overflow-auto container max-w-3xl p-4 align-self-end" >
        {/* <SpellInfo key={123} spell={wizardSpells[4]} /> */}
        {spellList.map(spell => <SpellInfo spell={spell} key={spell.id} />)}
      </div>
    </div>
    </UrqlProvider>
  );
}
