"use client";

import {
  materialBox,
  somaticBox,
  verbalBox,
} from "@/components/FormComponents/CheckBox";
import InputField from "@/components/FormComponents/InputField";
import SelectField from "@/components/FormComponents/SelectField2";
import DumbSpell from "@/components/Index/DumbSpell";
import NavBar from "@/components/NavBar/NavBar2";
import { useCreateSpellMutation, useMeQuery } from "@/gql/graphql";
import { schools as allSchools, spheres as allSpheres } from "@/lib/types";
import { isServer } from "@/lib/utils";
import { Formik, Form, Field } from "formik";

export default function Homebrew() {
  const [createSpell] = useCreateSpellMutation();
  const {data, loading} = useMeQuery({skip: isServer()})

  return (
    <div className="h-scren w-screen">
      <NavBar />

    <div className="h-screen w-screen flex flex-wrap place-items-center items-center justify-center">
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
          material: false,
          level: { value: "1", label: "1" },
          castingClass: { value: "", label: "" },
          castingTime: { value: "", label: "" },
          savingThrow: { value: "", label: "" },
          spheres: [],
          schools: [],
        }}
        onSubmit={async (spellInput, { resetForm }) => {
          console.log(spellInput);
          const { customCastingTime, ...rest } = spellInput;
          const spellInfo = {
            ...rest,
            level: parseInt(spellInput.level.value),
            class: spellInput.castingClass.value,
            spheres:
              spellInput.spheres.length !== 0
                ? spellInput.spheres.map(
                    (sphere) =>
                      (sphere as { value: string; label: string }).value
                  )
                : [],
            castingTime:
              spellInput.castingTime.value === "Custom"
                ? customCastingTime
                : spellInput.castingTime.value,
            savingThrow: spellInput.savingThrow.value,
            schools: spellInput.schools.map(
              (sc) => (sc as { value: string; label: string }).value
            ),
          };
          console.log(spellInfo);

          const response = await createSpell({
            variables: {
              spellInfo,
            },
          });
          resetForm();

          console.log(response);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="w-full h-full flex flex-wrap overflow-auto">
            <div className="flex flex-col">
              <div className="flex gap-10 flex-wrap p-2 lg:p-10">
                <div className="main shit gap-4 flex flex-col min-w-96">
                  <InputField
                    updateParent={(s) => setFieldValue("name", s)}
                    text="Name"
                    bonus=""
                    name="name"
                    type="text"
                  />
                  <SelectField
                    setFieldValue={setFieldValue}
                    field="level"
                    options={[...Array(9).keys()].map((l) => ({
                      value: (l + 1).toString(),
                      label: (l + 1).toString(),
                    }))}
                  />
                  <SelectField
                    field="castingClass"
                    setFieldValue={setFieldValue}
                    options={[
                      { value: "Wizard", label: "Wizard" },
                      { value: "Cleric", label: "Cleric" },
                    ]}
                  />
                  {values.castingClass?.value === "Cleric" ? (
                    <SelectField
                      setFieldValue={setFieldValue}
                      field="spheres"
                      isMulti
                      options={allSpheres.map((sp) => ({
                        value: sp,
                        label: sp,
                      }))}
                    />
                  ) : (
                    ""
                  )}
                  <SelectField
                    field="schools"
                    setFieldValue={setFieldValue}
                    isMulti
                    options={allSchools.map((sc) => ({ value: sc, label: sc }))}
                  />

                  <Field
                    value="somatic"
                    name="somatic"
                    type="checkbox"
                    component={somaticBox}
                  />
                  <Field
                    value="verbal"
                    name="verbal"
                    type="checkbox"
                    component={verbalBox}
                  />
                  <Field
                    value="material"
                    name="material"
                    type="checkbox"
                    component={materialBox}
                  />

                  {values.material ? (
                    <InputField
                      updateParent={(s) => setFieldValue("materials", s)}
                      name="materials"
                      type="text"
                      text="Material components"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col gap-4 min-w-96">
                  <InputField
                    updateParent={(s) => setFieldValue("aoe", s)}
                    name="aoe"
                    type="text"
                    text="AoE"
                  />
                  <SelectField
                    setFieldValue={setFieldValue}
                    field="castingTime"
                    options={[{ value: "Custom", label: "Custom" }].concat(
                      [...Array(10).keys()].map((ct) => ({
                        value: (ct + 1).toString(),
                        label: (ct + 1).toString(),
                      }))
                    )}
                  />
                  {values.castingTime &&
                  values.castingTime.value === "Custom" ? (
                    <InputField
                      updateParent={(s) => setFieldValue("aoe", s)}
                      name="customCastingTime"
                      type="text"
                      text="Custom"
                    />
                  ) : (
                    ""
                  )}

                  <InputField
                    updateParent={(s) => setFieldValue("damage", s)}
                    name="damage"
                    type="text"
                    text="Damage"
                  />
                  <InputField
                    updateParent={(s) => setFieldValue("duration", s)}
                    name="duration"
                    type="text"
                    text="Duration"
                  />

                  <InputField
                    updateParent={(s) => setFieldValue("range", s)}
                    name="range"
                    type="text"
                    text="Range"
                  />

                  <SelectField
                    setFieldValue={setFieldValue}
                    fieldName="Saving Throw"
                    field="savingThrow"
                    options={[
                      { value: "none", label: "none" },
                      { value: "1/2", label: "1/2" },
                      { value: "negate", label: "negate" },
                      { label: "special", value: "special" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-10 pt-0 flex flex-col gap-4 w-1/2 ">
                <InputField
                  updateParent={(s) => setFieldValue("description", s)}
                  textarea
                  name="description"
                  type="text"
                  text="Description"
                />
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
            <div className="p-10">
                <DumbSpell spell={{
                  aoe: values.aoe,
                  castingTime: values.castingTime.value === "Custom" ? values.customCastingTime : values.castingTime.value,
                  class: values.castingClass.value,
                  damage: values.damage,
                  description: values.description,
                  duration: values.duration,
                  level: parseInt(values.level.value),
                  material: values.material,
                  materials: values.materials,
                  name: values.name,
                  range: values.range,
                  savingThrow: values.savingThrow.value,
                  schools: values.schools.length === 0 ? [''] : values.schools.map(sc => (sc as {value: string, label: string}).value),
                  somatic: values.somatic,
                  source: loading ? '' : (data!.me!.username as string),
                  verbal: values.verbal,
                  spheres: values.spheres.length === 0 ? [''] : values.spheres.map(sc => (sc as {value: string, label: string}).value),
                }} />

            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}
