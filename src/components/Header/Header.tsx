import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  postLogout: () => void
}

function Header(props: HeaderPropsType) {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img}/>
      </a>
      <div className={styles.headerLogin}>
        {props.isAuth ? props.login : <NavLink to={'/login'} className={styles.headerLoginLink}>Login</NavLink>}
        {props.isAuth && <button onClick={props.postLogout}>Logout</button>}
      </div>
    </header>
  )
}

export default Header;