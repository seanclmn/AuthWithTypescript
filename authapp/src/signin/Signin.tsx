// @ts-nocheck

import React from 'react'
import { Navigate } from 'react-router'
import {useForm} from 'react-hook-form'
import {Button } from '@mantine/core'
import { auth } from '../Firebase'
import { AuthContext } from '../auth/Auth'


function Signin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        event.preventDefault()
        console.log(data);
        auth.signInWithEmailAndPassword(data.email,data.password).then((cred)=>console.log(cred))
    }
        
    const {currentUser} = React.useContext(AuthContext)

    if (currentUser) return <Navigate to='/'/>
    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
        >
            <p>signin</p>
            <input {...register("email", { required: true })} className="border"/>
            <input {...register("password", { required: true })} className="border"/>
            <Button type="submit">submit</Button>
        </form>

    )
}

export default Signin
