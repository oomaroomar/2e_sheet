'use client'
import {CharacterItem, BookItem } from "@/components/CharacterPageItems";
import InputField from "@/components/FormComponents/InputField"
import { useCreateCharacterMutation, useMyCharactersQuery, } from "@/gql/graphql";
import SmileyFace from "@/svgs/SmileyFace";
import { Formik, Form } from "formik"
import { useState } from "react";

export default function Characters() {

  const [createCharacter] = useCreateCharacterMutation();
  const {data: charData, loading} = useMyCharactersQuery()
  const [charFocus, setCharFocus] = useState<number | null>(null)
  
  return <div className="h-screen w-screen flex">
    <div className="left w-1/2 flex justify-between">
        <div className="create/edit/delete character">
            <Formik initialValues={{name: ''}} 
            onSubmit={async ({name}, {setStatus}) => {
            const response = await createCharacter({
                variables: {name},
                update: (cache) => {
                cache.evict({fieldName: 'myCharacters'})
                }
            })
            if(response.data?.createCharacter.error) {
                console.log('ARASRA')
                setStatus(response.data?.createCharacter.error)
            } 
            }}>
            {({isSubmitting}) => <Form>
            <div className="flex flex-col space-y-6 w-96">
            <InputField text="Character name" bonus="" name="name" type="text"/>
            <div className="">
                <button className="text-center text-white w-full rounded-md p-1.5 bg-indigo-600 shadow-sm hover:bg-indigo-500 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" disabled={isSubmitting}>
                Create character
                </button>
                </div>
                </div>
            </Form>}
            </Formik>
        <div className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200">
            <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <SmileyFace h="100" />
                <span className="ms-3 text-3xl">rename character</span>
            </div>
        </div>
        <div className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200">
            <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <SmileyFace h="100" />
                <span className="ms-3 text-3xl">delete character</span>
            </div>
        </div>

        </div>
        <div className="characterlist overflow-auto">
            {loading ? '' : <ul className="pt-4 mt-4 space-y-2 font-medium" >
                {charData?.myCharacters?.map(char => <CharacterItem 
                onClick={() => charFocus === char.id ? setCharFocus(null) : setCharFocus(char.id)} text={char.name}  key={char.id}/>)}
            </ul>}
        </div>
    </div>
    <div className="right w-1/2">
        <div className="booklist">
        {charData?.myCharacters?.map(char => <ul 
            className={`pt-4 mt-4 space-y-2 font-medium opacity-95 ${charFocus === char.id ? '': 'hidden'}`} 
            key={char.id}>
            {char.spellBooks?.map(book => <BookItem text={book.name} key={book.id} />)}
        </ul>)}
        </div>
        <div className="spellist"></div>
    </div>

  </div>
}