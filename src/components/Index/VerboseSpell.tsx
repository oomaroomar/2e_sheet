import { CharacterContext, CharacterContextType } from "@/context/CharacterContext"
import { useLearnSpellMutation, useSpellByIdQuery } from "@/gql/graphql"
import { Spell } from "@/lib/types"
import DocumentPlusIcon from "@/svgs/PlusDocumentIcon"
import PlusIcon from "@/svgs/PlusIcon"
import { useContext, useState } from "react"
import WriteSpellModal from "../ModalComponents/WriteSpellModal"
import { UserContext, UserContextType } from "@/context/userContext"
import TrashIcon from "@/svgs/TrashIcon"
import WrenchIcon from "@/svgs/WrenchIcon"
import Link from "next/link"
import DeleteSpellModal from "../ModalComponents/DeleteSpellModal"

interface VerboseSpellProps {
    spellId: number
}

export default function VerboseSpell({spellId}: VerboseSpellProps) {

    const {data, loading} = useSpellByIdQuery({variables: {id: spellId}})
    const [learn] = useLearnSpellMutation()
    const {charId} = useContext(CharacterContext) as CharacterContextType
    const [writeSpellModal, toggleWSModal] = useState(false)
    const [deleteSpellModal, toggleDSModal] = useState(false)

    const { isAdmin } = useContext(UserContext) as UserContextType

    async function learnSpell() {
        if(charId === null) return
        const response = await learn({
            variables: {characterId: charId, spellId},
            update: (cache) => {
                cache.evict({fieldName: 'myCharacters'})
            }
        })
        if(response.data?.learnSpell.error) {
            console.log(response.data?.learnSpell.error)
        } 
    }

    if(loading) return ''
    const spell = data?.spellByID as Spell

    return <div className="p-4" >
        <WriteSpellModal showModal={writeSpellModal} spell={spell} setModalState={() => toggleWSModal(false)} />
        <DeleteSpellModal showModal={deleteSpellModal} spell={spell} setModalState={() => toggleDSModal(false)} />
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-md shadow-${spell.schools[0]}`} >
            <div className={`col-span-2 flex justify-end bg-${spell.schools[0]} rounded-t-xl text-xl`}>
                <div className="col-span-5 flex px-4 py-1 mr-auto" ><b>{`${spell.level})`}</b><b className="pl-4">{spell.name}</b>
                 {isAdmin ? <>
                 <Link href={`/spells/edit/${spell.id}`}>
                <div className="pl-4 py-1 flex place-items-center justify-center hover:cursor-pointer" ><WrenchIcon h={"24px"}/> </div>
                 </Link>
                <div onClick={() => toggleDSModal(true)} className="pl-4 py-1 flex place-items-center justify-center hover:cursor-pointer" ><TrashIcon h={"24px"}/></div>
                </> 
                : ''}
                </div>
                <div className="da-buttons flex">
                {!charId ? '' : <>
                <div onClick={() => toggleWSModal(true)} className="px-4 py-1 flex place-items-center justify-center hover:cursor-pointer" >{(spell.class === 'Wizard' && charId !== null) ? <DocumentPlusIcon h={"24px"}/> : ''}</div>
                <div onClick={learnSpell} className="px-4 py-1 flex place-items-center justify-center hover:cursor-pointer" >{(spell.class === 'Wizard' && charId !== null) ? <PlusIcon h={"24px"}/> : ''}</div>
                </>}
                </div>
               <div className="px-8 py-1" ><b>{spell.class === 'Cleric' ? 'C' : 'W'}</b></div>
            </div>
            <div className="col-span-2 px-4" > <b>{spell.somatic ? 'S ' : ''} {spell.verbal ? 'V ' : ''}{spell.material ? 'M: ' : ''}</b>{spell.materials}</div>
            <div className="px-4" > <b>Damage:</b> {spell.damage}</div>
            <div className="px-4" > <b>Duration:</b> {spell.duration}</div>
            <div className="px-4" > <b>AoE:</b> {spell.aoe}</div>
            <div className="px-4" > <b>Range:</b>  {spell.range}</div>
            <div className="px-4" > <b>Casting Time:</b> {spell.castingTime}</div>
            <div className="px-4" > <b>Save:</b>  {spell.savingThrow}</div>
            {spell.class === 'Cleric' ?
            <div className="px-4" > <b>Spheres:</b>  {spell.spheres?.map((sphere, i) => i === spell.spheres!.length-1 ? 
            <span key={sphere}>{sphere} </span>
            : <span key={sphere}>{sphere}, </span>)}</div>
            : null
             }
            {/* Add scroll bar by adding max-h-80 and overflow-auto */}
            <div className="col-span-2 p-2 px-4 pt-0 text-lg " > <b className="text-lg">Description: </b>{spell.description}</div>
            <div className="px-4 pt-0 pb-2" > <b>School:</b>  {spell.schools[0]}</div>
            <div className="px-4 pt-0 pb-2" > <b>Source:</b>  {spell.source}</div>
        </div>
    </div>
}