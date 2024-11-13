import { ErrorMessage, Field } from "formik";
import { useState } from "react";

export interface InputFieldProps {
    name: string
    type: string
    bonus?: string
    text: string
    textarea?: boolean
    updateParent: (s: string) => void
}

// function capitalizeFirstLetter(s: string): string {
//     return s.charAt(0).toUpperCase() + s.slice(1)
// }

export default function InputFields({name, bonus, text, textarea, updateParent}: InputFieldProps) {
    const [state, setState] = useState('')
    return <div>
    <div className="flex items-center justify-between" >
      <label>{text}</label>
      <div className="font-semibold text-sm text-pink-600 hover:text-pink-400 hover:cursor-pointer">
        {bonus ? bonus : ''}
      </div>
      </div>
      {textarea ? 
      <textarea onChange={e => setState(e.target.value)} onBlur={() => updateParent(state)} className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 resize"  /> 
      : <input onChange={e => setState(e.target.value)} onBlur={() => updateParent(state)} className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 resize"  />}
      {/* <Field as={textarea ? "textarea" : 'input'} type={type} name={name} /> */}
      <ErrorMessage name={name} component="div" />
  </div>
}

interface SimpleInputFieldProps {
    name: string
    type: string
    bonus?: string
    text: string
    textarea?: boolean
}

export function SimpleInputField({name, type, bonus, text, textarea}: SimpleInputFieldProps) {
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