import React, {ChangeEvent} from "react";
import styles from "./ProfileStatus.module.css";

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deActivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
  }

  changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: event.currentTarget.value});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.editMode
          ?
          <input onBlur={this.deActivateEditMode}
                 autoFocus className={styles.statusInput}
                 value={this.state.status}
                 onChange={this.changeStatus}/>
          :
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Enter status...'}</span>}
      </div>
    )
  }
}

export default ProfileStatus;