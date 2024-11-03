import { Field, ErrorMessage } from "formik";

export interface InputFieldProps {
    name: string
    type: string
    bonus: string
    text: string
}

// function capitalizeFirstLetter(s: string): string {
//     return s.charAt(0).toUpperCase() + s.slice(1)
// }

export default function InputFields({name, type, bonus, text}: InputFieldProps) {
    return <div>
    <div className="flex items-center justify-between" >
      <label>{text}</label>
      <div className="font-semibold text-sm text-indigo-600 hover:text-indigo-500">
        {bonus}
      </div>
      </div>
      <Field className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" type={type} name={name} />
      <ErrorMessage name={name} component="div" />
  </div>
}