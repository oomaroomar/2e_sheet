import { Character } from "@/gql/graphql"

interface CharCardProps {
    character: Character
    onClick: () => void
}

export default function CharCard({character, onClick}:CharCardProps) {

    return <div className="container w-full p-3" onClick={onClick} >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-md hover:shadow-slate-400`} >
            <div className={`col-span-2 grid grid-cols-10 bg-white rounded-md text-xl hover:cursor-pointer`}>
                <div className="col-span-10 px-2 py-1" ><b>{character.name}</b></div>
            </div>
        </div>
    </div>
}