"use client";

import { materialBox, somaticBox, verbalBox } from "@/components/FormComponents/CheckBox";
import InputField from "@/components/FormComponents/InputField";
import SelectField from "@/components/FormComponents/SelectField";
import { useCreateSpellMutation } from "@/gql/graphql";
import { schools as allSchools, spheres as allSpheres } from "@/lib/types";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { MultiValue } from "react-select";

export default function Homebrew() {
  const [createSpell] = useCreateSpellMutation()
  // Need to extract some logic out of Formik, because form was becomming laggy
  const [level, setLevel] = useState<{ value: string; label: string; }>()
  const [schools, setSchools] = useState<MultiValue<{ value: string; label: string; }>>()
  const [castingClass, setClass] = useState<{ value: string; label: string; }>()
  const [castingTime, setCastingTime] = useState<{ value: string; label: string; }>()
  const [savingThrow, setSavingThrow] = useState<{ value: string; label: string; }>()
  const [spheres, setSpheres] = useState<MultiValue<{ value: string; label: string; }>>()

  return (
    <div className="h-screen w-screen flex place-items-center items-center justify-center">
      <Formik
        initialValues={{
          name: "",
          materials: "",
          range: "",
          aoe: "",
          duration: "",
          damage: "",
          description: "",
          customCastingTime: "",
          verbal: false,
          somatic: false,
          material: false
        }}
        onSubmit={async (spellInput, { setStatus, resetForm }) => {
          console.log(spellInput)
          console.log('level', level)
          console.log('schools', schools)
          console.log('castingClass', castingClass)
          console.log('castingTime', castingTime)
          console.log('savingThrow', savingThrow)
          console.log('spheres', spheres)
          if(!level || !schools || !castingTime || !castingClass || !savingThrow || (castingClass.value === 'Cleric' && !spheres)) return
          const {customCastingTime, ...rest} = spellInput
          const spellInfo = {...rest, 
            level: parseInt(level.value), 
            class: castingClass.value, 
            spheres: !!spheres ? spheres.map(sphere => (sphere as {value: string, label: string}).value) : [],
            castingTime: castingTime.value === "Custom" ? customCastingTime : castingTime.value,
            savingThrow: savingThrow.value, 
            schools: (schools.map(sc => (sc as {value: string, label: string}).value))
          }
          console.log(spellInfo)

          const response = await createSpell({
            variables: {
              spellInfo
            }
          })
          // reset everything
          setLevel(undefined)
          setSchools(undefined)
          setClass(undefined)
          setCastingTime(undefined)
          setSavingThrow(undefined)
          setSpheres(undefined)
          resetForm()

          console.log(response)
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="w-full h-full">
            <div className="flex gap-10 p-10">
              <div className="main shit gap-6 flex flex-col min-w-96">
                <InputField updateParent={(s) => setFieldValue('name', s)} text="Name" bonus="" name="name" type="text" />
                <SelectField
                  updateParent={setLevel}
                  field="level"
                  options={[...Array(9).keys()].map((l) => ({
                    value: (l + 1).toString(),
                    label: (l + 1).toString(),
                  }))}
                />
                <SelectField
                  field="class"
                  updateParent={(val) => {
                    setClass(val)
                  }}
                  options={[
                    { value: "Wizard", label: "Wizard" },
                    { value: "Cleric", label: "Cleric" },
                  ]}
                />
                {castingClass?.value === "Cleric" ? (
                  <SelectField
                    updateParentMulti={setSpheres}
                    field="spheres"
                    isMulti
                    options={allSpheres.map((sp) => ({ value: sp, label: sp }))}
                  />
                ) : (
                  ""
                )}
                <SelectField
                  field="schools"
                  updateParentMulti={setSchools}
                  isMulti
                  options={allSchools.map((sc) => ({ value: sc, label: sc }))}
                />

                <Field value="somatic" name="somatic" type="checkbox" component={somaticBox}/>
                <Field value="verbal" name="verbal" type="checkbox" component={verbalBox}/>
                <Field value="material" name="material" type="checkbox" component={materialBox}/>

                {values.material ? <InputField
                  updateParent={(s) => setFieldValue('materials', s)}
                  name="materials"
                  type="text"
                  text="Material components"
                /> : ''}
              </div>
              <div className="flex flex-col gap-6 min-w-96">
                <InputField 
                  updateParent={(s) => setFieldValue('aoe', s)}
                name="aoe" type="text" text="AoE" />
                <SelectField
                  updateParent={setCastingTime}
                  field="castingTime"
                  options={[{ value: "Custom", label: "Custom" }].concat(
                    [...Array(10).keys()].map((ct) => ({
                      value: (ct + 1).toString(),
                      label: (ct + 1).toString(),
                    }))
                  )}
                />
                {(castingTime && castingTime.value === "Custom") ? (
                  <InputField 
                  updateParent={(s) => setFieldValue('aoe', s)}
                  name="customCastingTime" type="text" text="Custom" />
                ) : (
                  ""
                )}

                <InputField 
                  updateParent={(s) => setFieldValue('damage', s)}
                name="damage" type="text" text="Damage" />
                <InputField 
                  updateParent={(s) => setFieldValue('duration', s)}
                name="duration" type="text" text="Duration" />
               
                <InputField 
                  updateParent={(s) => setFieldValue('range', s)}
                name="range" type="text" text="Range" />
                
                <SelectField 
                  updateParent={setSavingThrow}
                  fieldName="Saving Throw"
                  field="savingThrow"
                  options={[ {value: "none", label: "none"}, {value: "1/2", label: "1/2"}, {value: "negate", label: "negate"},{label: "special", value: "special"}]}
                  // setFieldValue={setFieldValue}
                />
              </div>

              <div className="flex flex-col gap-6 w-1/2 min-w-96">
                <InputField 
                  updateParent={(s) => setFieldValue('description', s)}
                textarea name="description" type="text" text="Description" />
                <button
                  className="text-center text-white w-48 rounded-md p-1.5 bg-pink-600 shadow-sm hover:bg-pink-500 
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  type="submit"
                  disabled={isSubmitting}
                >
                  create spell
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
