import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

type HeaderPropsType = {
  login: string | null
}

function Header(props: HeaderPropsType) {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img}/>
      </a>
      {props.login}
    </header>
  )
}

export default Header;