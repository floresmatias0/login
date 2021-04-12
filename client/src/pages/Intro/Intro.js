import React from 'react';
import {useHistory} from 'react-router-dom'
import styles from '../../styles/Intro.module.css'

const Intro = () => {

    const history = useHistory();

    const handleRegister = () =>{
        history.push('/register')
    }

    const handleLogin = () =>{
        history.push('/login')
    }

    return (
        <div className={styles.div}>
            <div className={styles.container}>
                <h1>Welcome</h1>
                <label className={styles.label}>
                    ¿Do you have a account?
                </label>
                <button 
                    className={styles.button} 
                    onClick={handleRegister}>
                        register
                </button>
                <label className={styles.label}>
                    if already resgister
                </label>
                <button 
                    className={styles.button} 
                    onClick={handleLogin}>
                        login
                </button>
            </div>
        </div>
    )
}

export default Intro;