import React from "react";
import styles from './Users.module.css'
import {userType} from "../../redux/usersReducer";

type UsersPropsType = {
  users: Array<userType>
  changeToFollow: (userID: number) => void
  changeToUnfollow: (userID: number) => void
  setUsers: (users: Array<userType>) => void
}

function Users(props: UsersPropsType) {
  return (
    <div className={styles.users}>
      <ul className={styles.usersList}>

        {
          props.users.map(user => {
            return (
              <li key={user.id} className={styles.usersItem}>
                <div className={styles.inner}>
                  <div className={styles.box}>
                    <div className={styles.userPhoto}>
                      <img src={user.photoUrl} alt="user-photo"/>
                    </div>
                    <div className={styles.userName}>
                      {user.fullName}
                    </div>
                  </div>
                  <div className={styles.userLocation}>
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                  </div>
                </div>
                <div className={styles.userInfo}>
                  <div>{user.status}</div>
                  <button onClick={() => {
                    user.followed ? props.changeToUnfollow(user.id) : props.changeToFollow(user.id)
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

export default Users;