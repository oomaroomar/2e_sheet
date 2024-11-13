import { SpellLite } from '@/lib/types'

interface SpellCardProps {
    spell: SpellLite,
    inspectSpell: (n: number) => void
}

export default function SearchResult({spell, inspectSpell}: SpellCardProps) {
    return <div className="container w-full p-3" onClick={() => inspectSpell(spell.id)} >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-md hover:shadow-${spell.schools[0]}`} >
            <div className={`col-span-2 grid grid-cols-10 bg-${spell.schools[0]} rounded-t-xl text-xl hover:cursor-pointer`}>
                <div className="px-2 py-1" ><b>{spell.level}{')'}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>{spell.name}</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>{spell.somatic ? "S " : ""}{spell.verbal ? "V " : ""}{spell.material ? "M: " : ""}</b>{spell.materials}</div>
            <div className="p-2 pt-0" > <b>Damage: </b>  {spell.damage}</div>
            <div className="p-2 pt-0" > <b>Duration: </b>{spell.duration} </div>
        </div>
    </div>
}