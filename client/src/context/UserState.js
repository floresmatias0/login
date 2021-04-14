import React from 'react'
import UserContext from './UserContext'
import axios from 'axios'
import swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

const UserState = (props) => {

    const history = useHistory();

    const handleLogout = () => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/users/logout',
            headers:{
                ContentType: 'application/json'
            }
        }
        try{
            axios.request(options)
            localStorage.clear()
            document.cookie = `path =; username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
            swal.fire({
                text: '¡Thanks for your visit!',
                icon: 'info',
                confirmButtonText: 'Cool'
            })
            history.push('/')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <UserContext.Provider value={{handleLogout}}>
            {props.children}    
        </UserContext.Provider>
    )
}

export default UserState;