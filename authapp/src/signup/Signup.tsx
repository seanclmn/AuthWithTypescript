// @ts-nocheck

import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Button } from '@mantine/core'
import {auth} from '../Firebase'


function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        event.preventDefault()
        console.log(data);
        auth.createUserWithEmailAndPassword(data.email,data.password)
    }

    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
        >
            <p>sign up</p>
            <input {...register("email", { required: true })} className="border"/>
            <input {...register("password", { required: true })} className="border"/>
            <Button type="submit">submit</Button>
        </form>
    
        )
}

export default Signup
