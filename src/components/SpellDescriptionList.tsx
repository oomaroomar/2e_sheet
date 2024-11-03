import { DescriptionListContext, DescriptionListContextType } from "@/context/DescriptionListContext"
import { useContext } from "react"
import VerboseSpell from "./VerboseSpell"


export default function SpellDescriptions() {
    const {spellList} = useContext(DescriptionListContext) as DescriptionListContextType
    if(spellList.length === 0) {
        return <div className="text-center h-full text-7xl text-slate-300 flex place-content-center place-items-center" >
            <div className="pb-60">
            Click a spell from the grid
            </div>
        </div>
    }
    return <>
        {spellList.map(id => <VerboseSpell spellId={id} key={id} />)}
    </>
}