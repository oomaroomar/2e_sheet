import { isServer } from "@/lib/utils";
import { createContext, useState } from "react";

export type UserContextType = {
    isAdmin: boolean | null
    adminSetter: (b: boolean | null) => void
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const isAdminStr = isServer() ? null : localStorage.getItem('isAdmin')

    const [isAdmin, setAdmin] = useState<boolean | null>(isAdminStr === null ? null : JSON.parse(isAdminStr))

    function adminSetter(b: boolean | null) {
        if(b === null) {
            localStorage.removeItem('isAdmin')
        } else {
            localStorage.setItem('isAdmin', b.toString())
        }
        setAdmin(b)
    }

    return <UserContext.Provider value={{adminSetter, isAdmin}} >
        {children}
    </UserContext.Provider>
}