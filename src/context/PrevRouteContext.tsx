import { createContext, useState } from "react";

export type PrevRouteContextType = {
    prev: 'wizard' | 'cleric' | 'all' | ''
    updatePrev: (s: 'wizard' | 'cleric' | 'all' | '') => void
}

export const PrevRouteContext = createContext<PrevRouteContextType | null>(null)

export const PrevRouteProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [prev, setPrev] = useState<'wizard' | 'cleric' | 'all' | ''>('')

      return <PrevRouteContext.Provider value={{prev, updatePrev: (s: 'wizard' | 'cleric' | 'all' | '') => setPrev(s)}} >
        {children}
      </PrevRouteContext.Provider>
}