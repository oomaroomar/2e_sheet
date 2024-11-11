import { FilterContext, FilterContextType } from "@/context/FilterContext";
import { schools } from "@/lib/types";
import { useContext } from "react";

interface WizardNavbarProps {
    viewCharacters: () => void
    currentChar: string | undefined
    toggleLimit: () => void
    limit: boolean
    
}


export default function WizardNavbarContent ({viewCharacters, currentChar, limit, toggleLimit}: WizardNavbarProps)  {

    const filters = useContext(FilterContext) as FilterContextType

    return <div className="flex gap-1">
        {schools.map(school => <button onClick={() => filters.uSchools(school)} className={`bg-${filters.schools.includes(school) ? 'bg-gray-100' : school} p-2 rounded-md`} 
            key={school}>{school}</button>)}
        <button onClick={viewCharacters}>{!currentChar ? 'Not in char mode' : currentChar}</button>
        <div className="flex items-center ">
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onClick={toggleLimit} checked={limit} className="sr-only peer"/>
            <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full 
            peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-4 after:w-4 after:transition-all peer-checked:bg-pink-600 hover:peer-checked:bg-pink-700">
            </div>
        </label>
        <div className="block">
        <span className="ml-3 text-sm font-normal text-gray-600 mb-1">Toggle Button</span>
        <br/>
        <span className="ml-3 text-sm font-normal text-gray-400 ">Only learned spells</span>
        </div>
        </div>
               
    </div>
}