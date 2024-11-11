import { FilterContext, FilterContextType } from "@/context/FilterContext";
import { Spheres } from "@/lib/types";
import { useContext } from "react";

export default function PriestNavbarContent() {
    const filters = useContext(FilterContext) as FilterContextType
    return <div className="flex flex-wrap place-items-center justify-items-center">
        {Spheres.map(sphere => <button onClick={() => filters.uMSpheres(sphere)} className={`bg-${filters.majorSpheres.includes(sphere) ? 'bg-gray-100' : 'bg-red-600'} p-2 rounded-md`} 
            key={sphere}>{sphere}</button>)}
    </div>
}