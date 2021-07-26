import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
  id: number
  name: string
}

function DialogItem(props: DialogItemPropsType) {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={path}  activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;