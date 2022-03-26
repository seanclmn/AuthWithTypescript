import React, {useEffect, useState} from 'react'
import auth from "../Firebase"

export const AuthContext = React.createContext("default user")


interface Props {}

function AuthProvider ({children}: {children: React.ReactNode}) {

    const [currentUser, setCurrentUser]=useState<any>(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        auth.onAuthStateChanged((user: string)=>{
            setCurrentUser(user)
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
