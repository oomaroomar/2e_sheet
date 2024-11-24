"use client"

import DumbSpell from "@/components/Index/DumbSpell";
import { LoadingGrid } from "@/components/Index/SpellGrid";
import Navbar from "@/components/NavBar/NavBar2";
import { useSpellByIdQuery } from "@/gql/graphql";
import { Usable, use} from "react";

export default function Home({params}: {params: Usable<unknown>}) {

    const spellId = use(params)
    const {data, loading} = useSpellByIdQuery({variables: {id: parseInt((spellId as {id: string}).id)}})

    return <div className="h-screen w-screen flex flex-col place-items-center" >
        <Navbar/>
        <div className="h-full w-full md:w-1/2 overflow-auto">
        {(loading || !data?.spellByID.id) ? <LoadingGrid/> : 
            <DumbSpell spell={data.spellByID} />
        }
        </div>
    </div>
}


