import React from "react";
import styles from "./ProfileStatus.module.css";

type ProfileStatusType = {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deActivateEditMode = () => {
    this.setState({editMode: false})
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.editMode
          ?
          <input onBlur={this.deActivateEditMode} autoFocus className={styles.statusInput} value={this.props.status}/>
          :
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
      </div>
    )
  }
}

export default ProfileStatus;