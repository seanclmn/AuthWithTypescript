import React from 'react'
import Navigate from 'react-router-dom'
import { AuthContext } from '../auth/Auth'

function Privateroute({children}: {children: React.ReactNode}) {
    const {currentUser} = React.useContext(AuthContext)
    return (    
        !!currentUser ? children : (<Navigate to={'/signin'}/>)
    )
}

export default Privateroute
