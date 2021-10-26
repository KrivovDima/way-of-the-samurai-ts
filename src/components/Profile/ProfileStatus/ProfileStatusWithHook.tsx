import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.css";

type ProfileStatusWithHookPropsType = {
  status: string
  updateStatus: (status: string) => void
}

function ProfileStatusWithHook(props: ProfileStatusWithHookPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [statusText, setStatusText] = useState(props.status);

  useEffect(() => {
    setStatusText(props.status);
  }, [props.status])

  const deActivateEditMode = () => {
    props.updateStatus(statusText)
    setEditMode(false);
  }
  const activateEditMode = () => {
    setEditMode(true);
  }
  const changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setStatusText(event.currentTarget.value);
  }

  return (
    <div className={styles.wrapper}>
      {editMode
        ?
        <input onBlur={deActivateEditMode}
               autoFocus className={styles.statusInput}
               value={statusText}
               onChange={changeStatus}/>
        :
        <span onDoubleClick={activateEditMode}>{props.status || 'Enter status...'}</span>}
    </div>
  );
}

export default ProfileStatusWithHook;