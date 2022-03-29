// @ts-nocheck

import React from 'react'
import {useForm} from 'react-hook-form'


function Signin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        event.preventDefault()
        console.log(data);}

    return (
        <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
            <p>signin</p>
            <input {...register("email", { required: true })} className="border"/>
            <input {...register("password", { required: true })} className="border"/>
            <button>submit</button>
        </form>

    )
}

export default Signin
