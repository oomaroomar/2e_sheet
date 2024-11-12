
// interface CheckBoxProps {
//     name: string
//     value: boolean
//     checked: boolean
// }

import { useField } from "formik";

interface CheckBoxProps {
    name: string
}

export function verbalBox() {
    return <CheckBox name="verbal" />
}
export function materialBox() {
    return <CheckBox name="material" />
}
export function somaticBox() {
    return <CheckBox name="somatic" />
}

function CheckBox({name}: CheckBoxProps) {
    const [field] = useField({name, type: "checkbox"})
  return (
    <div className="inline-flex items-start">
      <label className="flex items-start cursor-pointer relative">
        <input
            {...field}
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-600
           checked:border-pink-800"
          id="check-with-description"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label className="cursor-pointer ml-2 text-slate-600 text-sm">
        <div>
          <p className="font-medium">{name[0].toUpperCase().concat(name.slice(1, name.length))}</p>
        </div>
      </label>
    </div>
  );
}
