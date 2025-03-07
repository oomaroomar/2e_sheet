import { Form, Formik } from "formik";
import {SimpleInputField} from "./InputField";

export default function LoginForm() {

return <Formik initialValues={{username: '', password: '', retypePassword: '', email: ''}} onSubmit={values => console.log('username', values.username)}>
  {({isSubmitting}) => <Form>
    <div className="flex flex-col space-y-6 w-96">
    <SimpleInputField text="Username" bonus="" name="username" type="text"/>
    <SimpleInputField text="Email address" bonus="" name="email" type="email"/>
    <SimpleInputField text="Password" bonus="Forgot password?" name="password" type="password"/>
    <SimpleInputField text="Retype password" bonus="" name="retypePassword" type="password"/>
    <div className="">
      <button className="text-center text-white w-full rounded-md p-1.5 bg-indigo-600 shadow-sm hover:bg-indigo-500 
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" disabled={isSubmitting}>
        Sign in
      </button>
    </div>
    </div>
  </Form>}
</Formik>
}
