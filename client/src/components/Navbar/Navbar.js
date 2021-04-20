import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../styles/NavBar.module.css'

const Navbar = () => {

    return (
        <div className={styles.div}>
            <nav className={styles.nav}>
               <Link className={styles.link} to='/'>
                   <h1>Henry proyect login</h1> 
                </Link>
                <p className={`${styles.p} ${styles.floating}`}>by Matias Flores</p>
            </nav>
        </div>
    )
}

export default Navbar;