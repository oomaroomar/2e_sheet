import { ErrorMessage, Field } from "formik";
import { useState } from "react";

export interface InputFieldProps {
    name: string
    type: string
    bonus?: string
    text: string
    textarea?: boolean
    updateParent: (s: string) => void
    defaultVal?: string
}

export default function InputFields({name, bonus, text, textarea, updateParent, defaultVal}: InputFieldProps) {
    const [state, setState] = useState(defaultVal ? defaultVal : '')
    return <div>
    <div className="flex items-center justify-between" >
      <label>{text}</label>
      <div className="font-semibold text-sm text-pink-600 hover:text-pink-400 hover:cursor-pointer">
        {bonus ? bonus : ''}
      </div>
      </div>
      {textarea ? 
      <textarea value={state || ''} onChange={e => setState(e.target.value)} onBlur={() => updateParent(state)} className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 resize-y"  /> 
      : <input value={state || ''} onChange={e => setState(e.target.value)} onBlur={() => updateParent(state)} className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600"  />}
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
    color?: string
    textsize?: "xs" |"sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
}

export function SimpleInputField({name, type, bonus, text, textarea, color, textsize}: SimpleInputFieldProps) {
  console.log(color)
    return <div>
    <div className="flex items-center justify-between" >
      <label className={`text-${(textsize === undefined) ? 'base' : textsize}`}>{text}</label>
      <div className="font-semibold text-sm text-pink-600 hover:text-pink-400 hover:cursor-pointer">
        {bonus ? bonus : ''}
      </div>
      </div>
      <Field className={`outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
       ring-gray-400 text-${(textsize === undefined) ? 'base' : textsize} focus:ring-2 focus:ring-inset ${(color === undefined) ? 'focus:ring-pink-600' : `focus:ring-${color}` } resize`} as={textarea ? "textarea" : 'input'} type={type} name={name} />
      <ErrorMessage name={name} component="div" />
  </div>
}