import { FormikErrors } from "formik"
import { useEffect, useState } from "react";
import Select from 'react-select'

interface SelectFieldProps {
  options: {value: string, label: string}[]
  isMulti?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
    name: string;
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materials: string;
    range: string;
    aoe: string;
    duration: string;
    damage: string;
    description: string;
    level: {value: string, label: string};
    schools: {value: string, label: string}[];
    class: {value: string, label: string};
    castingTime:  {value: string, label: string};
    savingThrow: {value: string, label: string};
    spheres: never[];
  }>>;
  field: string
  fieldName?: string
    
}

export default function SelectField({fieldName, options, isMulti = false, setFieldValue, field}:SelectFieldProps) {
  const id = Date.now().toString()
  const [isMounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return isMounted ? <div>
    <label>{fieldName ? fieldName : field[0].toUpperCase().concat(field.slice(1, field.length))}</label>
    <Select  
      id={id}
      aria-live="off"
      options={options}
      isMulti={isMulti}
      onChange={(value) => setFieldValue(field, value)}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#db2777',
          primary75: '#ec4899',
          primary50: '#f472b6',
          primary25: '#f9a8d4',
          dangerLight: ''
        }
      })}
    />
  </div> : null}