import { SpellLite } from '@/lib/types'

interface SuccinctSpellProps {
    spell: SpellLite,
    inspectSpell: (n: number) => void
}

export default function SuccinctSpell({spell, inspectSpell}: SuccinctSpellProps) {
    return <div className="container w-72 p-3"  >
        <div onClick={() => inspectSpell(spell.id)} className={`hover:cursor-pointer grid border border-slate-200 grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-md hover:shadow-${spell.schools[0]}`} >
            <div className={`col-span-2 grid grid-cols-10 bg-${spell.schools[0]} rounded-t-xl`}>
                <div className="px-2 py-1" ><b>{spell.level}{')'}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>{spell.name}</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>{spell.somatic ? "S " : ""}{spell.verbal ? "V " : ""}{spell.material ? "M: " : ""}</b>{spell.materials}</div>
            <div className="p-2 pt-0" > <b>Damage: </b>  {spell.damage}</div>
            <div className="p-2 pt-0" > <b>Duration: </b>{spell.duration} </div>
        </div>
    </div>
}