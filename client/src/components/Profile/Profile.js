import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {getUserById} from '../../store/user/user.actions';
import styles from '../../styles/Profile.module.css'

const Profile = ({fetchUserIdEffect,STORE_USER}) =>{

    const {userId} = useParams()
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('email')){
            history.push('/')
        }
        fetchUserIdEffect(userId); //eslint-disable-next-line
    },[fetchUserIdEffect])

    return (
        <div className={styles.all}>
            {STORE_USER && STORE_USER.userLoading?(
                <p>Loading...</p>
            ):(
                <div className={styles.div}>
                    <h1>profile</h1>
                    <div className={styles.allContainer}>
                        <div className={styles.container}>
                            <span>id:</span>
                            <p>{STORE_USER.user.id}</p>
                            <span>name:</span>
                            <p>{STORE_USER.user.name}</p>
                            <span>surname:</span>
                            <p>{STORE_USER.user.surname}</p>
                            <span>email:</span>
                            <p>{STORE_USER.user.email} </p>
                        </div>
                    </div>
                    
                </div>
            )}        
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        STORE_USER: state.userReducers   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserIdEffect: (payload) => dispatch(getUserById(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);