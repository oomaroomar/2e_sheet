import { Field } from "formik"

interface SelectFieldProps {
    category: string
    options: {val: number | string, name: string}[]
    type: 'text' | 'number' | 'boolean' | 'null'
}

export default function SelectField({category, options, type}:SelectFieldProps) {
  return <div>
    <label>{category}</label>
  <Field className="outline-none appearance-none w-full block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset
  ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600" name={'bId'} as="select" type={type} >
    {options.map(op => <option key={op.val} value={op.val}>{op.name}</option>)}
  </Field>
  </div> 
}