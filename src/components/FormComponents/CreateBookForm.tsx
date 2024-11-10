import { Formik, Form } from "formik"
import InputField from "./InputField"
import { useCreateSpellBookMutation } from "@/gql/graphql";

interface CreateBookFormProps {
    charId: number | null
}

export default function CreateBookForm({charId}: CreateBookFormProps) {

    const [createSpellBook] = useCreateSpellBookMutation();
    return <Formik initialValues={{name: '', maxPages: 0}} 
    onSubmit={async ({name, maxPages}, {setStatus}) => {
        if(!charId) {
            setStatus("o oh")
            return
        }
    const response = await createSpellBook({
        variables: {name, charId, maxPages},
        update: (cache) => {
        cache.evict({fieldName: 'myCharacters'})
        }
    })
    if(response.data?.createSpellBook.errors) {
        console.log('ARASRA')
        setStatus(response.data.createSpellBook.errors)
    } 
    }}>
    {({isSubmitting}) => <Form>
    <div className="flex flex-col space-y-6 w-96">
    <InputField text="Book name" bonus="" name="name" type="text"/>
    <InputField text="Max pages" bonus="" name="maxPages" type="number"/>
    <div className="">
        <button className="text-center text-white w-full rounded-md p-1.5 bg-indigo-600 shadow-sm hover:bg-indigo-500 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" disabled={isSubmitting}>
        Create book
        </button>
        </div>
        </div>
</Form>}
</Formik>
}