import { Spell } from "@/lib/types"

interface SpellInfoProps {
    spell: Spell
}

export default function SpellInfo({spell}: SpellInfoProps) {
    return <div className="p-4" >
        <div className="grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-md" >
            <div className={`col-span-2 grid grid-cols-10 bg-${spell.school} rounded-t-xl text-xl`}>
                <div className="px-2 py-1" ><b>{`${spell.level})`}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>{spell.name}</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>S V M: </b>100gp pearl with super duper cool cuck shit with fucking crazy shit</div>
            <div className="px-2" > <b>Damage:</b> {spell.damage}</div>
            <div className="px-2" > <b>Duration:</b> {spell.duration}</div>
            <div className="px-2" > <b>AoE:</b> {spell.aoe}</div>
            <div className="px-2" > <b>Range:</b>  {spell.range}</div>
            <div className="px-2" > <b>Casting Time:</b> {spell.castingTime}</div>
            <div className="px-2" > <b>Save:</b>  {spell.savingThrow}</div>
            <div className="col-span-2 p-2 pt-0 text-lg" > <b className="text-lg">Description: </b>{spell.description}</div>
        </div>
    </div>
}