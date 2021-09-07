import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}

function Header(props: HeaderPropsType) {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img}/>
      </a>
      <div className={styles.headerLogin}>
        {props.isAuth ? props.login : <a className={styles.headerLoginLink} href="#">Login</a>}
      </div>
    </header>
  )
}

export default Header;