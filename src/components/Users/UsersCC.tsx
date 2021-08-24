import React from "react";
import styles from './Users.module.css'
import {userType} from "../../redux/usersReducer";
import axios from "axios";
import defaultUserPhoto from "../../assets/default-user-photo.png";
import {UsersPropsType} from "./Users";

class UsersCC extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <div className={styles.users}>
        <ul className={styles.usersList}>

          {
            this.props.users.map(user => {
              return (
                <li key={user.id} className={styles.usersItem}>
                  <div className={styles.inner}>
                    <div className={styles.box}>
                      <div className={styles.userPhoto}>
                        <img src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}
                             alt="user-photo"/>
                      </div>
                      <div className={styles.userName}>
                        {user.name}
                      </div>
                    </div>
                    <div className={styles.userLocation}>
                      <div>{'user.location.city'}</div>
                      <div>{'user.location.country'}</div>
                    </div>
                  </div>
                  <div className={styles.userInfo}>
                    <div>{user.status}</div>
                    <button onClick={() => {
                      user.followed ? this.props.changeToUnfollow(user.id) : this.props.changeToFollow(user.id)
                    }}
                            className={`${styles.btnUser} ${user.followed ? styles.unfollow : styles.follow}`}>
                      {user.followed ? 'unfollow' : 'follow'}
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default UsersCC;