// @ts-nocheck

import React from 'react'
import {auth } from '../Firebase'

function Home() {

    function signOutHandler(e){
        e.preventDefault()
        auth.signOut().then(res=>console.log("signed out"))

    }
    return (
        <div>
            <p>home</p>
            <button onClick={signOutHandler}></button>
        </div>
    )
}

export default Home
