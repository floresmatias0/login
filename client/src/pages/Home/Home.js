import React, { useEffect,useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUserById} from '../../store/user/user.actions'
import styles from '../../styles/Home.module.css'
import UserContext from '../../context/UserContext';

const Home = ({fetchUserIdEffect,STORE_USER}) => {

    const {userId} = useParams()
    const history = useHistory();
    const {handleLogout} = useContext(UserContext)

    useEffect(()=>{
        if(!localStorage.getItem('email')){
            history.push('/')
        }
        fetchUserIdEffect(userId); //eslint-disable-next-line
    },[fetchUserIdEffect])

    const handleProfile = () => {
        history.push(`/profile/${userId}`)
    }

    return (
        <div className={styles.div}>
            <h1>Thanks for testing the page</h1>
            <h2>Welcome back {STORE_USER.user.name}</h2>
            <button className={styles.button} onClick={handleProfile}>profile</button>
            <button className={styles.button} onClick={handleLogout}>logout</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);