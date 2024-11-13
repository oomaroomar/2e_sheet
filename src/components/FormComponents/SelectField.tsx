// import { FormikErrors } from "formik"
import { useEffect, useState } from "react";
import Select, { MultiValue } from 'react-select'

interface SelectFieldProps {
  options: {value: string, label: string}[]
  isMulti?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
  //   name: string;
  //   level: {value: string, label: string};
  //   schools: {value: string, label: string}[];
  //   class: {value: string, label: string};
  //   verbal: boolean;
  //   somatic: boolean;
  //   material: boolean;
  //   materials: string;
  //   range: string;
  //   aoe: string;
  //   castingTime:  {value: string, label: string};
  //   duration: string;
  //   savingThrow: {value: string, label: string};
  //   damage: string;
  //   description: string;
  //   spheres: never[];
  // }>>;
  field: string
  fieldName?: string
  updateParent?: (val: { value: string; label: string; }) => void
  updateParentMulti?: (val: MultiValue<{ value: string; label: string; }>) => void
    
}

export default function SelectField({fieldName, options, isMulti = false, field, updateParent, updateParentMulti}:SelectFieldProps) {
  const id = Date.now().toString()
  const [isMounted, setMounted] = useState(false)
  const [value, setValue] = useState<{ value: string; label: string; } | MultiValue<{ value: string; label: string; }>>()
  useEffect(() => setMounted(true), [setMounted])

  console.log("rerendering select field")

  function done() {
    if(!value) return
    if(updateParentMulti) {
      updateParentMulti((value as  MultiValue<{ value: string; label: string; }>))
    } 
    if(updateParent){
      updateParent(value as { value: string; label: string; })
    }
  }

  // console.log(setFieldValue)

  return isMounted ? <div>
    <label>{fieldName ? fieldName : field[0].toUpperCase().concat(field.slice(1, field.length))}</label>
    <Select  
      id={id}
      options={options}
      isMulti={isMulti}
      onBlur={done}
      onChange={(value) => value === null ? setValue(undefined) : setValue(value)}
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