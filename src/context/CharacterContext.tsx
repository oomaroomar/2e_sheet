import { isServer } from "@/lib/utils";
import { createContext, useState } from "react";

export type CharacterContextType = {
    charId: number | null
    setCharId: (n: number | null) => void
}

export const CharacterContext = createContext<CharacterContextType | null>(null)

export const CharacterProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const cidstr = isServer() ? null : localStorage.getItem('charId')

    const [charId, setCharId] = useState<number | null>(cidstr === null ? null : parseInt(cidstr))

    function charIdSetter(n: number | null) {
        if(n === null) {
            localStorage.removeItem('charId')
        } else {
            localStorage.setItem('charId', n.toString())
        }
        setCharId(n)
    }

    return <CharacterContext.Provider value={{charId, setCharId: charIdSetter}} >
        {children}
    </CharacterContext.Provider>
}