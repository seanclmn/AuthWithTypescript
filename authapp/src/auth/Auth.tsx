// @ts-nocheck

import React, {useEffect, useState} from 'react'
import auth from "../Firebase"


interface AuthContextProps {
    user: object|null
}

export const AuthContext = React.createContext<AuthContextProps|null>(null)

function AuthProvider ({children}: {children: React.ReactNode}) {

    const [currentUser, setCurrentUser]=useState<AuthContextProps|null>(null)
    const [loading,setLoading]=useState<boolean>(true)

    useEffect(()=>{
        auth.onAuthStateChanged((user: AuthContextProps)=>{
            setCurrentUser({user})
            setLoading(false)
        })
    })

    if(loading) return null

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
