import { Field, ErrorMessage } from "formik";

export interface InputFieldProps {
    name: string
    type: string
    bonus?: string
    text: string
    textarea?: boolean
}

// function capitalizeFirstLetter(s: string): string {
//     return s.charAt(0).toUpperCase() + s.slice(1)
// }

export default function InputFields({name, type, bonus, text, textarea}: InputFieldProps) {
    return <div>
    <div className="flex items-center justify-between" >
      <label>{text}</label>
      <div className="font-semibold text-sm text-pink-600 hover:text-pink-400 hover:cursor-pointer">
        {bonus ? bonus : ''}
      </div>
      </div>
      <Field className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 resize" as={textarea ? "textarea" : 'input'} type={type} name={name} />
      <ErrorMessage name={name} component="div" />
  </div>
}