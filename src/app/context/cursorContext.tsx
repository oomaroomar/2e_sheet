import { useState, createContext } from "react";

export type CursorContextType = {
    name: string
    lvl: number
}

export const CursorContext = createContext<CursorContextType | null>(null)

// export const 
