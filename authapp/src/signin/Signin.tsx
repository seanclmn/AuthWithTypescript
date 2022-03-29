
import React from 'react'
import {useForm} from 'react-hook-form'
import {Button } from '@mantine/core'


function Signin() {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = (data,event) => {
    //     event.preventDefault()
    //     console.log(data);}

    return (
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        >
            <p>signin</p>
            {/* <input {...register("email", { required: true })} className="border"/>
            <input {...register("password", { required: true })} className="border"/> */}
            <Button >submit</Button>
        </form>

    )
}

export default Signin
