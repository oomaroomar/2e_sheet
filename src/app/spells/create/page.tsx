'use client'

import InputField from "@/components/FormComponents/InputField"
import SelectField from "@/components/FormComponents/SelectField";
import { useLoginMutation } from "@/gql/graphql";
import { Formik, Form } from "formik"
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();
  const [login] = useLoginMutation();

  return <div className="h-screen w-screen flex place-items-center items-center justify-center">
  <Formik initialValues={{name: null, level: null, school: null, class: null, verbal: null,
  somatic: null, material: null, materials: null, range: null, aoe: null, castingTime: null,
    duration: null, savingThrow: null, damage: null, description: null, spheres: null}} 
  onSubmit={async (spellInput, {setStatus}) => {}}>
  {({isSubmitting}) => <Form>
    <div className="flex flex-col space-y-6 w-96">
    <InputField text="Name" bonus="" name="name" type="text"/>
    <SelectField category="Level" type="number" options={[1,2,3,4,5,6,7,8,9].map(i => ({val: i, name: i.toString()}))} />
    <SelectField category="school" type="text" options={[1,2,3,4,5,6,7,8,9].map(i => ({val: i, name: i.toString()}))} />
    <InputField text="Password" bonus="Forgot password?" name="password" type="password"/>
    <div className="">
      <button className="text-center text-white w-full rounded-md p-1.5 bg-pink-600 shadow-sm hover:bg-pink-500 
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" type="submit" disabled={isSubmitting}>
        Sign in
      </button>
      </div>
      </div>
    </Form>}
  </Formik>
  </div>
    
}