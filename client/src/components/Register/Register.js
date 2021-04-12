import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import styles from '../../styles/Register.module.css'

const Register = () => {

    const{register,handleSubmit,formState: {errors}} = useForm();
    const onSubmit = (input) => {
        console.log(input);
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/users',
            headers: {
                ContentType: "application/json",
            },
            data:{
                name: input.name,
                surname: input.surname,
                email: input.email,
                password: input.password
            }
        }
        try{
            axios.request(options)
        }catch{
            console.log('ERROR')
        }
    }

    return (
        <div className={styles.div}>
            <div className={styles.container}>
               <h1>Register</h1>
               <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                   <label>name</label>
                    <input 
                        name='name' 
                        {...register('name',{ required:'This camp is required',
                        minLength:{value:6, message:'camp password cant be short'},
                        maxLength:{value:12, message:'this password very large try again'} })} 
                        placeholder='insert your username here'/>
                        {errors.name && <p>{errors.name.message}</p>}
                    <label>surname</label>
                    <input 
                        name='surname'
                        type='text'
                        {...register('surname',{ required:'This camp is required'})} 
                        placeholder='insert your surname here'/>
                        {errors.surname && <p>{errors.surname.message}</p>}
                    <label>email</label>
                    <input 
                        name='email' 
                        type='email'
                        {...register('email',{required:'This camp is required'})} 
                        placeholder='insert your email here'/>
                        {errors.email && <p>{errors.email.message}</p>}
                    <label>password</label>
                    <input 
                        name='password'
                        type='password'
                        {...register('password',{ required:'this camp is required'})} 
                        placeholder='insert password'/> 
                        {errors.password && <p>{errors.password.message}</p>}
                    <button 
                        type='submit' 
                        className={styles.button}>
                            Register
                    </button>
               </form>
                 
            </div>  
        </div>
    )
}

export default Register;