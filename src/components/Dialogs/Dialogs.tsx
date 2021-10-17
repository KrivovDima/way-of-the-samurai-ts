import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/dialogsReducer";
import {useFormik} from "formik";
import {validateTextarea as validate} from "../../utils/validateFunctions";

type DialogsPropsType = {
  data: dialogsPageType
  addNewMessage: (text: string) => void
  sendNewMessage: (messageText: string) => void
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

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validate,
    onSubmit: values => {
      props.sendNewMessage(values.text);
      formik.resetForm();
    },
  });


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsDataIteration}
      </div>
      <div className={styles.messages}>
        {messageDataIteration}
        <form onSubmit={formik.handleSubmit}>
          <textarea id="message"
                    {...formik.getFieldProps('message')}>
      </textarea>
          {formik.touched.text && formik.errors.text ?
            <div style={{color: "tomato"}}>{formik.errors.text}</div> : null}
          <div>
            <button>
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dialogs


