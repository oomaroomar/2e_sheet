import { Formik, Form } from "formik"
import {SimpleInputField} from "./InputField"
import { useCreateCharacterMutation } from "@/gql/graphql";

export default function CreateCharacterForm() {

    const [createCharacter] = useCreateCharacterMutation();
    return <Formik initialValues={{name: ''}} 
    onSubmit={async ({name}, {setStatus, resetForm}) => {
    const response = await createCharacter({
        variables: {name},
        update: (cache) => {
        cache.evict({fieldName: 'myCharacters'})
        }
    })
    if(response.data?.createCharacter.error) {
        console.log('ARASRA')
        setStatus(response.data?.createCharacter.error)
    } else {
        resetForm()
    }
    }}>
    {({isSubmitting}) => <Form>
    <div className="flex flex-col space-y-6 w-96">
    <SimpleInputField text="Character name" bonus="" name="name" type="text"/>
    <div className="">
        <button className="text-center text-white w-full rounded-md p-1.5 bg-pink-600 shadow-sm hover:bg-pink-500 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" type="submit" disabled={isSubmitting}>
        Create character
        </button>
        </div>
        </div>
</Form>}
</Formik>
}
