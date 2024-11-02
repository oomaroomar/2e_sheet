import { createContext, useState } from "react";

export type DescriptionListContextType = {
    spellList: number[]
    addSpell: (n: number) => void
}

export const DescriptionListContext = createContext<DescriptionListContextType | null>(null)

export const DescriptionListProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [spellList, setSpellList] = useState<number[]>([])

    const addSpell = (n: number) => {
        const i = spellList.findIndex(id => id === n)
        if(i === -1) {
          setSpellList([n].concat(spellList))
        } else {
          setSpellList([n].concat(spellList.toSpliced(i, 1)))
        }
      }

      return <DescriptionListContext.Provider value={{addSpell, spellList}} >
        {children}
      </DescriptionListContext.Provider>
}