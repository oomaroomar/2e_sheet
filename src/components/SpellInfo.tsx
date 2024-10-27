import { useSpellByIdQuery } from "@/gql/graphql"
import { Spell } from "@/lib/types"


interface SpellInfoProps {
    spellId: number
}

export default function SpellInfo({spellId}: SpellInfoProps) {

    const {data, loading} = useSpellByIdQuery({variables: {id: spellId}})

    if(loading) return ''
    const spell = data?.spellByID as Spell

    return <div className="p-4" >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-md shadow-${spell.school}`} >
            <div className={`col-span-2 grid grid-cols-10 bg-${spell.school} rounded-t-xl text-xl`}>
                <div className="px-4 py-1" ><b>{`${spell.level})`}</b></div>
                <div className="col-span-9 px-4 py-1" ><b>{spell.name}</b></div>
            </div>
            <div className="col-span-2 px-4" > <b>{spell.somatic ? 'S ' : ''} {spell.verbal ? 'V ' : ''}{spell.material ? 'M: ' : ''}</b>{spell.materials}</div>
            <div className="px-4" > <b>Damage:</b> {spell.damage}</div>
            <div className="px-4" > <b>Duration:</b> {spell.duration}</div>
            <div className="px-4" > <b>AoE:</b> {spell.aoe}</div>
            <div className="px-4" > <b>Range:</b>  {spell.range}</div>
            <div className="px-4" > <b>Casting Time:</b> {spell.castingTime}</div>
            <div className="px-4" > <b>Save:</b>  {spell.savingThrow}</div>
            {/* Get rid of scroll bar by removing max-h-80 and overflow-auto */}
            <div className="col-span-2 p-2 px-4 pt-0 text-lg max-h-80 overflow-auto" > <b className="text-lg">Description: </b>{spell.description}</div>
            <div className="px-4 pt-0 pb-2" > <b>School:</b>  {spell.school}</div>
            <div className="px-4 pt-0 pb-2" > <b>Source:</b>  {spell.source}</div>
        </div>
    </div>
}