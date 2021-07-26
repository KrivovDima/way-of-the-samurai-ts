import React, {LegacyRef} from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
  data: dialogsPageType
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

  const messageTextRef: LegacyRef<HTMLTextAreaElement> = React.createRef();

  const sendMessage = () => {
    alert(messageTextRef.current?.value);
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsDataIteration}
      </div>
      <div className={styles.messages}>
        {messageDataIteration}
        <textarea ref={messageTextRef} className={styles.textMessage}>

        </textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs