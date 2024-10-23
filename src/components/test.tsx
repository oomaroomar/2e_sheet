import { useSpellsQuery } from "@/gql/spells.hooks"


export default function Test() {

    const [{data, fetching}] = useSpellsQuery()
    
    if (fetching) return <div className="text-black">fetchign</div>

    return <div className="text-black">
        {JSON.stringify(data)}
    </div>



}