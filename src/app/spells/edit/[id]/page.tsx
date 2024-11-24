"use client";

import EditSpell from "@/components/editSpellPage";
import { Usable, use } from "react";

export default function Home({params}: {params: Usable<unknown>}) {

  const spellIdstr = use(params)
  const spellId = parseInt((spellIdstr as {id: string}).id)

    return <EditSpell spellId={spellId} />;
}
