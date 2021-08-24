import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img}/>
      </a>
    </header>
  )
}

export default Header;