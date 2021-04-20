import React,{useContext} from 'react';
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import swal from 'sweetalert2'
import animaics from '../../img/wakko-warner.jpg'
import styles from '../../styles/Intro.module.css'

const Intro = ({STORE_USER}) => {

    const {handleLogout} = useContext(UserContext)
   
    const history = useHistory();

    const handleRegister = () =>{
        history.push('/register')
    }

    const handleHome = () =>{
        if(!localStorage.getItem('email')){
            swal.fire({
                text: 'please login',
                icon: 'info',
                confirmButtonText: 'ok'
            })
        }else{
         history.push(`/home/${STORE_USER.user.id}`)   
        }
        
    }

    const handleLogin = () =>{
        if(localStorage.getItem('email')){
            swal.fire({
                buttonsStyling: false,
                customClass: {
                    header: styles.customHeader,
                    popup: styles.customPopup,
                    confirmButton: styles.customButton,
                    content: styles.customTitle,
                    image: styles.customImage
                  },
                text: '¡already logged!',
                imageUrl: animaics,
                confirmButtonText: 'Cool',
            })
        }else{
            history.push('/login')
        }
    }

    return (
        <div className={styles.div}>
            <div className={styles.container}>
                <h1 className= {styles.bigEntrance}>Welcome</h1>                
                {localStorage.getItem('email') ?(
                    <>
                    <button 
                        className={styles.buttonB} 
                        onClick={handleHome}>
                            home
                    </button>
                    <button 
                        className={styles.buttonB} 
                        onClick={handleLogout}>
                            logout
                    </button>
                    </>
                ):(
                <>
                    <label className={styles.label}>
                        ¿Do you have a account?
                    </label>
                    <button 
                        className={styles.buttonA} 
                        onClick={handleRegister}>
                            register
                    </button>
                    <label className={styles.label}>
                        if already resgister
                    </label>
                    <button 
                        className={styles.buttonA} 
                        onClick={handleLogin}>
                            login
                    </button>
                </>
                )
                }


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        STORE_USER: state.userReducers   
    }
}

export default connect(mapStateToProps)(Intro);