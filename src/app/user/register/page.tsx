'use client'

import InputField from "@/components/FormComponents/InputField"
import { MeDocument, MeQuery, useRegisterMutation } from "@/gql/graphql"
import { toErrorMap } from "@/lib/utils"
import { Formik, Form } from "formik"
import { useRouter } from "next/navigation"

export default function Register() {

    const router = useRouter()
    const [register] = useRegisterMutation()

    return <div className="h-screen w-screen flex place-items-center items-center justify-center">
     <Formik initialValues={{username: '', password: '', retypePassword: '', email: ''}} 
     onSubmit={async ({username, password, retypePassword, email}, {setStatus}) => {
      if(password !== retypePassword) setStatus("error")
      const response = await register({
        variables: {options: {username, password, email}},
        update: (cache, {data}) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.register.user
            }
          })
          if(response.data?.register.errors) {
            setStatus(toErrorMap(response.data.register.errors))
          } else {
            router.push('/')
          }
        }
      })
     }}>
    {({isSubmitting}) => <Form>
      <div className="flex flex-col space-y-6 w-96">
      <InputField text="Username" bonus="" name="username" type="text"/>
      <InputField text="Email address" bonus="" name="email" type="email"/>
      <InputField text="Password" bonus="Forgot password?" name="password" type="password"/>
      <InputField text="Retype password" bonus="" name="retypePassword" type="password"/>
      <div className="">
        <button className="text-center text-white w-full rounded-md p-1.5 bg-indigo-600 shadow-sm hover:bg-indigo-500 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" disabled={isSubmitting}>
          Sign in
        </button>
      </div>
      </div>
    </Form>}
  </Formik>
  </div>
    
}