import { Spell } from '@/lib/types'

interface SpellCardProps {
    spell: Spell,
    inspectSpell: (spell: Spell) => void
}

export default function SpellCard({spell, inspectSpell}: SpellCardProps) {
    return <div className="container w-96 p-3 " onClick={() => inspectSpell(spell)} >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-lg`} >
            <div className={`col-span-2 grid grid-cols-10 bg-${spell.school} rounded-t-xl text-xl`}>
                <div className="px-2 py-1" ><b>{spell.level}{')'}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>{spell.name}</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>{spell.somatic ? "S " : ""}{spell.verbal ? "V " : ""}{spell.material ? "M: " : ""}</b>{spell.materials}</div>
            <div className="p-2 pt-0" > <b>Damage: </b>  {spell.damage}</div>
            <div className="p-2 pt-0" > <b>Duration: </b>{spell.duration} </div>
        </div>
    </div>
}