import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../styles/NavBar.module.css'

const Navbar = () => {

    return (
        <>
            <nav className={styles.nav}>
               <Link className={styles.link} to='/'>
                   <h1>Henry proyect nav</h1> 
                </Link>
            </nav>
        </>
    )
}

export default Navbar;