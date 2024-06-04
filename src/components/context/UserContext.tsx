import React, { ReactNode, createContext, useState } from "react";

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children : ReactNode
}

type UserContextType = {
    user : AuthUser | null,
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const userContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: UserContextProviderProps) => {

const [user, setUser] = useState<AuthUser | null>(null)

return (
    <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
);
}