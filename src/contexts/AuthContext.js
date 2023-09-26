"use client"

import { apiLogin, apiLogout } from "@/actions/user";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [ user, setUser ] = useState(null)

    async function login(credenciais){
        const resp = await apiLogin(credenciais)

        if (resp?.error) return resp;

        setUser({
            nome: "Joao",
            email: credenciais.email
        })
    }

    function logout() {
        apiLogout()
        setUser(null)
    }


    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}