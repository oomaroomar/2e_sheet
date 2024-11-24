import {  useCallback, useContext, useEffect, useRef, useState } from "react"
import { Spell } from "@/lib/types"
import { useDeleteSpellMutation, useMyCharactersQuery, useWriteSpellMutation } from "@/gql/graphql"
import { Field, Form, Formik } from "formik"
import { CharacterContext, CharacterContextType } from "@/context/CharacterContext"
import { SimpleInputField } from "../FormComponents/InputField"

interface SearchModalProps {
    showModal: boolean
    setModalState: (ns: boolean) => void
    spell: Spell
}

export default function DeleteSpellModal({showModal, setModalState, spell}:SearchModalProps) {
    console.log("in here")

    const modalRef = useRef<HTMLInputElement>(null)
    const [deleteSpell] = useDeleteSpellMutation()

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if(event.key === 'Escape') {
            setModalState(false)
        }
      },[setModalState])

    useEffect(() => {
        const checkClickOutside = (e: MouseEvent) => {
            if(showModal && !modalRef?.current?.contains(e.target as Node)) {
                setModalState(false)
            }
        }
        document.addEventListener('mousedown', checkClickOutside)
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [showModal, setModalState, handleKeyPress, modalRef])

    if(!showModal) return ''


    return <div className="h-screen w-full fixed top-0 mx-auto left-0 z-40 hidden lg:flex flex-col p-12vh">
        <div ref={modalRef} className="mx-auto max-h-full rounded-lg bg-white my-0 w-full max-w-3xl flex flex-col shadow-2xl shadow-black" >
        <div className="" >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-2xl shadow-red-600`} >
            <div className={`col-span-2 grid grid-cols-11 bg-${spell.schools[0]} rounded-t-xl text-xl`}>
                <div className="px-4 py-1" ><b>{`${spell.level})`}</b></div>
                <div className="col-span-7 px-4 py-1" ><b>{spell.name}</b></div>
                <div className="px-4 py-1" ><b>{spell.class === 'Cleric' ? 'C' : 'W'}</b></div>
            </div>
            <div className="col-span-2 px-4" > <b>{spell.somatic ? 'S ' : ''} {spell.verbal ? 'V ' : ''}{spell.material ? 'M: ' : ''}</b>{spell.materials}</div>
            :<div className="col-span-2 px-4" ><Formik initialValues={{confirmInput: ''}} onSubmit={async ({confirmInput}, {setStatus}) => {
                if(!(confirmInput === spell.name)) {
                    console.log('o oh')
                    return
                }
                console.log("past o oh")
                const response = await deleteSpell({variables: {deleteSpellId: spell.id},
                    update: (cache) => {
                        if(spell.class === 'Wizard') {
                            cache.evict({fieldName: 'wizardSpells'})
                        } else {
                            cache.evict({fieldName: 'clericSpells'})
                        }
                        cache.evict({fieldName: 'allSpells'})
                    }
                })
                console.log('got past the await',response)
                if(response.data?.deleteSpell.name) {
                    console.log('ARASRA')
                } 

            }}>{({isSubmitting}) => <Form><div className="flex">
                <SimpleInputField textsize="2xl" color="red-600" type="text" name="confirmInput" text="Retype the name of the spell to confirm" bonus="" /> 
                <div className="">
                    <button className="text-center text-white w-full rounded-md p-1.5 bg-red-600 shadow-sm hover:bg-red-500 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" type="submit" disabled={isSubmitting}>
                    DELETE SPELL
                    </button>
                </div>
                </div></Form>}
                </Formik></div>
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
           
        </div>
    </div>
}