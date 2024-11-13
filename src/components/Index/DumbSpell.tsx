import { Spell } from "@/lib/types"

interface VerboseSpellProps {
    spell: Omit<Spell, "id">
}

export default function DumbSpell({spell}: VerboseSpellProps) {
    console.log(spell.class)

    return <div className="p-4" >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-md shadow-${spell.schools[0]}`} >
            <div className={`col-span-2 grid grid-cols-11 bg-${spell.schools[0]} rounded-t-xl text-xl`}>
                <div className="px-4 py-1" ><b>{`${spell.level})`}</b></div>
                <div className="col-span-7 px-4 py-1" ><b>{spell.name}</b></div>
                <div></div><div></div>
                <div className="px-4 py-1" ><b>{spell.class === 'Cleric' ? 'C' : 'W'}</b></div>
            </div>
            <div className="col-span-2 px-4" > <b>{spell.somatic ? 'S ' : ''} {spell.verbal ? 'V ' : ''}{spell.material ? 'M: ' : ''}</b>{spell.materials}</div>
            <div className="px-4" > <b>Damage:</b> {spell.damage}</div>
            <div className="px-4" > <b>Duration:</b> {spell.duration}</div>
            <div className="px-4" > <b>AoE:</b> {spell.aoe}</div>
            <div className="px-4" > <b>Range:</b>  {spell.range}</div>
            <div className="px-4" > <b>Casting Time:</b> {spell.castingTime}</div>
            <div className="px-4" > <b>Save:</b>  {spell.savingThrow}</div>
            {spell.class === 'Cleric' ?
            <div className="px-4" > <b>Spheres:</b>  {spell.spheres?.map((sphere, i) => i === spell.spheres!.length-1 ? 
            <span key={sphere}>{sphere} </span>
            : <span key={sphere}>{sphere}, </span>)}</div>
            : null
             }
            {/* Add scroll bar by adding max-h-80 and overflow-auto */}
            <div className="col-span-2 p-2 px-4 pt-0 text-lg " > <b className="text-lg">Description: </b>{spell.description}</div>
            <div className="px-4 pt-0 pb-2" > <b>School:</b>  {spell.schools[0]}</div>
            <div className="px-4 pt-0 pb-2" > <b>Source:</b>  {spell.source}</div>
        </div>
    </div>
}