"use client";

import {
  materialBox,
  somaticBox,
  verbalBox,
} from "@/components/FormComponents/CheckBox";
import InputField from "@/components/FormComponents/InputField";
import SelectField from "@/components/FormComponents/SelectField2";
import DumbSpell from "@/components/Index/DumbSpell";
import {LoadingGrid } from "@/components/Index/SpellGrid";
import NavBar from "@/components/NavBar/NavBar2";
import { useMeQuery, useSpellByIdQuery, useUpdateSpellMutation } from "@/gql/graphql";
import { schools as allSchools, spheres as allSpheres } from "@/lib/types";
import { Formik, Form, Field } from "formik";

interface EditSpellProps {
    spellId: number
}

export default function EditSpell({spellId}: EditSpellProps) {

  const [createSpell] = useUpdateSpellMutation();
  const {data, loading} = useMeQuery()
  const {data: spellFirst, loading: spellLoading} = useSpellByIdQuery({variables: {id: spellId}})

  if(loading || spellLoading || !spellFirst?.spellByID) return <LoadingGrid/>
  if(!data?.me) return <div>please log in to create  a spel</div>

  const {spellByID: spell} = spellFirst
  const ctIndex = [...Array(10).keys()].findIndex(n => n === parseInt(spell.castingTime))

  return (
    <div className="h-scren w-screen">
      <NavBar />
    <div className="h-screen w-screen flex flex-wrap place-items-center items-center justify-center">
      <Formik
        initialValues={{
          name: spell.name,
          materials: spell.materials,
          range: spell.range,
          aoe: spell.aoe,
          duration: spell.duration,
          damage: spell.damage,
          description: spell.description,
          customCastingTime: spell.castingTime,
          verbal: spell.verbal,
          somatic: spell.somatic,
          material: spell.material,
          castingTime: ctIndex === -1 ? { value: "Custom", label: "Custom" }: { value: spell.castingTime, label: spell.castingTime },
          level: { value: spell.level.toString(), label: spell.level.toString() },
          castingClass: { value: spell.class.toString(), label: spell.class.toString() },
          savingThrow: { value: spell.savingThrow, label: spell.savingThrow },
          spheres: !!spell.spheres ? spell.spheres.map(sphere => ({value: sphere, label: sphere})) : [],
          schools: spell.schools.map(sc => ({value: sc, label: sc}))
        }}
        onSubmit={async (spellInput, { }) => {
          console.log(spellInput);
          const { customCastingTime, castingClass, ...rest } = spellInput;
          const spellInfo = {
            ...rest,
            level: parseInt(spellInput.level.value),
            class: castingClass.value,
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
            id: spellId
          };
          
          console.log('spellinfo', spellInfo);

          const response = await createSpell({
            variables: {
              spellInfo,
            },
          });

          console.log('response', response);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="w-full h-full flex flex-wrap overflow-auto">
            <div className="flex flex-col p-10 w-full md:w-1/2">
              <div className="flex gap-10 flex-wrap justify-end p-4">
                <div className="main shit gap-4 flex flex-col w-full md:w-1/2 min-w-48 max-w-96">
                  <InputField
                    updateParent={(s) => setFieldValue("name", s)}
                    defaultVal={spell.name}
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
                    defaultVal={spell.materials}
                      updateParent={(s) => setFieldValue("materials", s)}
                      name="materials"
                      type="text"
                      text="Material components"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2 min-w-48 max-w-96">
                  <InputField
                    defaultVal={spell.aoe}
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
                    defaultVal={spell.castingTime}
                      updateParent={(s) => setFieldValue("aoe", s)}
                      name="customCastingTime"
                      type="text"
                      text="Custom"
                    />
                  ) : (
                    ""
                  )}

                  <InputField
                    defaultVal={spell.damage}
                    updateParent={(s) => setFieldValue("damage", s)}
                    name="damage"
                    type="text"
                    text="Damage"
                  />
                  <InputField
                    defaultVal={spell.duration}
                    updateParent={(s) => setFieldValue("duration", s)}
                    name="duration"
                    type="text"
                    text="Duration"
                  />

                  <InputField
                    defaultVal={spell.range}
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
              <div className="flex flex-col gap-4 w-full ">
                <InputField
                    defaultVal={spell.description}
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
            <div className="p-10 w-full md:w-1/2 min-w-48">
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
