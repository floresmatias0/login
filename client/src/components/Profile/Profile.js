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
        <>
            {STORE_USER && STORE_USER.userLoading?(
                <p>Loading...</p>
            ):(
                <div className={styles.div}>
                    <h1>profile</h1>
                    <p>name: {STORE_USER.user.name}</p>
                    <p>surname: {STORE_USER.user.surname}</p>
                    <p>email: {STORE_USER.user.email}</p>
                    <p>id: {STORE_USER.user.id}</p>
                </div>
            )}        
        </>
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