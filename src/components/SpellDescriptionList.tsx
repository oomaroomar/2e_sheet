import { DescriptionListContext, DescriptionListContextType } from "@/context/DescriptionListContext"
import { useContext } from "react"
import VerboseSpell from "./VerboseSpell"


export default function SpellDescriptions() {
    const {spellList} = useContext(DescriptionListContext) as DescriptionListContextType
    return <>
        {spellList.map(id => <VerboseSpell spellId={id} key={id} />)}
    </>
}