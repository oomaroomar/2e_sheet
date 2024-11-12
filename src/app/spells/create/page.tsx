"use client";

import { materialBox, somaticBox, verbalBox } from "@/components/FormComponents/CheckBox";
import InputField from "@/components/FormComponents/InputField";
import SelectField from "@/components/FormComponents/SelectField";
import { schools, spheres } from "@/lib/types";
import { Formik, Form, Field } from "formik";

export default function Homebrew() {
  return (
    <div className="h-screen w-screen flex place-items-center items-center justify-center">
      <Formik
        initialValues={{
          name: "",
          level: { value: "", label: "" },
          schools: [],
          class: { value: "", label: "" },
          materials: "",
          range: "",
          aoe: "",
          castingTime: { value: "", label: "" },
          duration: "",
          savingThrow: { value: "", label: "" },
          damage: "",
          description: "",
          spheres: [],
          customCastingTime: "",
          verbal: false,
          somatic: false,
          material: false
        }}
        onSubmit={async (spellInput, { setStatus }) => {
          console.log("hello")
          console.log(spellInput);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="w-full h-full">
            <div className="flex gap-10 p-10">
              <div className="main shit gap-6 flex flex-col min-w-96">
                <InputField text="Name" bonus="" name="name" type="text" />
                <SelectField
                  field="level"
                  options={[...Array(9).keys()].map((l) => ({
                    value: (l + 1).toString(),
                    label: (l + 1).toString(),
                  }))}
                  setFieldValue={setFieldValue}
                />
                <SelectField
                  field="class"
                  options={[
                    { value: "Wizard", label: "Wizard" },
                    { value: "Cleric", label: "Cleric" },
                  ]}
                  setFieldValue={setFieldValue}
                />
                {values.class.value === "Cleric" ? (
                  <SelectField
                    field="spheres"
                    isMulti
                    options={spheres.map((sp) => ({ value: sp, label: sp }))}
                    setFieldValue={setFieldValue}
                  />
                ) : (
                  ""
                )}
                <SelectField
                  field="schools"
                  isMulti
                  options={schools.map((sc) => ({ value: sc, label: sc }))}
                  setFieldValue={setFieldValue}
                />

                <Field value="somatic" name="somatic" type="checkbox" component={somaticBox}/>
                <Field value="verbal" name="verbal" type="checkbox" component={verbalBox}/>
                <Field value="material" name="material" type="checkbox" component={materialBox}/>

                {values.material ? <InputField
                  name="materials"
                  type="text"
                  text="Material components"
                /> : ''}
              </div>
              <div className="flex flex-col gap-6 min-w-96">
                <InputField name="aoe" type="text" text="AoE" />
                <SelectField
                  field="castingTime"
                  options={[{ value: "Custom", label: "Custom" }].concat(
                    [...Array(10).keys()].map((ct) => ({
                      value: (ct + 1).toString(),
                      label: (ct + 1).toString(),
                    }))
                  )}
                  setFieldValue={setFieldValue}
                />
                {(values.castingTime.value === "Custom") ? (
                  <InputField name="customCastingTime" type="text" text="Custom" />
                ) : (
                  ""
                )}

                <InputField name="damage" type="text" text="Damage" />
                <InputField name="duration" type="text" text="Duration" />
               
                <InputField name="range" type="text" text="Range" />
                
                <SelectField 
                  fieldName="Saving Throw"
                  field="savingThrow"
                  options={[ {value: "none", label: "none"}, {value: "1/2", label: "1/2"}, {value: "negate", label: "negate"},{label: "special", value: "special"}]}
                  setFieldValue={setFieldValue}
                />
              </div>

              <div className="flex flex-col gap-6 w-1/2 min-w-96">
                <InputField textarea name="description" type="text" text="Description" />
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
