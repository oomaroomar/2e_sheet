import { God, School } from '@/lib/types'


interface SchoolCardProps {
    school: School | God,
    setFilter: (s: School | God) => void
}

export default function SchoolCard({school, setFilter}: SchoolCardProps) {

    return <div className="container w-full p-3" onClick={() => setFilter(school)} >
        <div className={`grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-md hover:shadow-${school}`} >
            <div className={`col-span-2 grid grid-cols-10 bg-${school} rounded-md text-xl hover:cursor-pointer`}>
                <div className="col-span-10 px-2 py-1" ><b>{school}</b></div>
            </div>
        </div>
    </div>
}