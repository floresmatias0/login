import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'
import styles from '../../styles/Login.module.css'

const Login = () =>{

    const{register,handleSubmit,formState: {errors}} = useForm();
    const onSubmit = (input) => {
        console.log(input);
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/users/login',
            headers:{
                ContentType: 'application/json'
            },
            data:{
                username: input.name,
                password: input.password
            }
        }
        try{
            axios.request(options)
            .then(user => console.log(user))
        }catch{
            console.log('ERROR')
        }
    }

    return (
        <>
        <div className={styles.div}>
            <h1>Login</h1>
            <div className={styles.container}>
               <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <label>email</label>
                    <input 
                        name='email'
                        type='email' 
                        {...register('email',{ required:'This camp is required'})} 
                        placeholder='insert your email'/>
                        {errors.name && <p>{errors.name.message}</p>}
                    <label>password</label>
                    <input 
                        name='password' 
                        type='password'
                        {...register('password',{ required:true , minLength:2 })} 
                        placeholder='insert your password'/>
                        {errors.password && <p>this camp is required</p>}
                    <button type='submit' className={styles.button}>enter</button>
                </form> 
            </div>
            
        </div>
        </>
    )
}

export default Login;