'use client'

import {SimpleInputField} from "@/components/FormComponents/InputField"
import { MeDocument, MeQuery, useLoginMutation } from "@/gql/graphql";
import { toErrorMap } from "@/lib/utils";
import { Formik, Form } from "formik"
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();
  const [login] = useLoginMutation();

  return <div className="h-screen w-screen flex place-items-center items-center justify-center">
  <Formik initialValues={{username: '', password: ''}} 
  onSubmit={async ({username, password}, {setStatus}) => {
    const response = await login({
      variables: {password, usernameOrEmail: username},
      update: (cache, {data}) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            __typename: "Query",
            me: data?.login.user
          }
        })
      }
    })
    if(response.data?.login.errors) {
      console.log('ARASRA')
      setStatus(toErrorMap(response.data.login.errors))
    } else {
      router.push('/')
    }
  }}>
  {({isSubmitting}) => <Form>
    <div className="flex flex-col space-y-6 w-96">
    <SimpleInputField text="Username" bonus="" name="username" type="text"/>
    <SimpleInputField text="Password" bonus="Forgot password?" name="password" type="password"/>
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