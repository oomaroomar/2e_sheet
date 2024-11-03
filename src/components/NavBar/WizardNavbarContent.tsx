import { FilterContext, FilterContextType } from "@/context/FilterContext";
import { schools } from "@/lib/types";
import { useContext } from "react";

export default function WizardNavbarContent () {
    const filters = useContext(FilterContext) as FilterContextType
    return <>
        {schools.map(school => <button onClick={() => filters.uSchools(school)} className={`bg-${filters.schools.includes(school) ? 'bg-gray-100' : school} p-2 rounded-md`} 
            key={school}>{school}</button>)}
    </>
}