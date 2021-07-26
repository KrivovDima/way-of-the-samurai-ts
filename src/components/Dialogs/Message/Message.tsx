import styles from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
  message: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export default Message;