import React, {ChangeEvent, LegacyRef} from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/dialogsReducer";

type DialogsPropsType = {
  data: dialogsPageType
  addNewMessage: (text: string) => void
  sendNewMessage: () => void
  isAuth: boolean
}

function Dialogs(props: DialogsPropsType) {

  const dialogsDataIteration = props.data.dialogsData.map((dialog) => {
    return (
      <DialogItem id={dialog.id} name={dialog.name}/>
    )
  });
  const messageDataIteration = props.data.messagesData.map((message) => {
    return (
      <Message message={message.message}/>
    )
  })

  const onChangeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.addNewMessage(event.currentTarget.value);
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsDataIteration}
      </div>
      <div className={styles.messages}>
        {messageDataIteration}
        <textarea value={props.data.newMessageText}
                  className={styles.textMessage}
                  onChange={onChangeMessageText}>

        </textarea>
        <button onClick={() => {
          props.sendNewMessage()
        }}>
          Send message
        </button>
      </div>
    </div>
  )
}

export default Dialogs


