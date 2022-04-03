// @ts-nocheck

import React from 'react'
import {Navigate} from 'react-router-dom'
import { AuthContext } from '../auth/Auth'

// function PrivateRoute({children}: {children: React.ReactChildren}) {
//     const currentUser = React.useContext(AuthContext)
//     return (    
//         !!currentUser ? children : (<Navigate to={'/signin'}/>)
//     )
// }

function PrivateRoute({children}) {
    const {currentUser} = React.useContext(AuthContext)
    return (    
        !!currentUser ? children : (<Navigate to={'/signin'}/>)
    )
}

export default PrivateRoute
