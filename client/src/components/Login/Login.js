import axios from 'axios';
import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import styles from '../../styles/Login.module.css'

const Login = () =>{

    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem('email')){
            history.push('/')
        }
    })


    const{register,handleSubmit,formState: {errors}} = useForm();
    
    const onSubmit = (input) => {

        const options = {
            method: 'POST',
            url: 'http://localhost:3001/users/login',
            headers:{
                ContentType: 'application/json'
            },
            data:{
                email: input.email,
                password: input.password
            }
        }
        try{
            axios.request(options)
            .then(login => {
                console.log(login)
                localStorage.setItem("email", login.data.user.email)
                document.cookie = `path =${login.data.cookie.path}; username=${login.data.user.email}; expires=${login.data.cookie.expires}`
                return history.push(`/home/${login.data.user.id}`)
            })
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
                        {errors.email && <p>{errors.email.message}</p>}
                    <label>password</label>
                    <input 
                        name='password' 
                        type='password'
                        {...register('password',{ required:'This camp is required', 
                        minLength:{value:6, message:'this password is short'} })} 
                        placeholder='insert your password'/>
                        {errors.password && <p>{errors.password.message}</p>}
                    <button type='submit' className={styles.button}>enter</button>
                </form> 
            </div>
            
        </div>
        </>
    )
}

export default Login;