import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" className={styles.link} activeClassName={styles.active}>Message</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/news" className={styles.link} activeClassName={styles.active}>News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/music" className={styles.link} activeClassName={styles.active}>Music</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;