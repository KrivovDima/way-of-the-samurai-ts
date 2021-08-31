import React from "react";
import styles from "./Users.module.css";
import defaultUserPhoto from "../../assets/default-user-photo.png";
import {userType} from "../../redux/usersReducer";

export type UsersPropsType = {
  users: Array<userType>
  countUsers: number
  currentPage: number
  totalCount: number
  changeToFollow: (userID: number) => void
  changeToUnfollow: (userID: number) => void
  onClickPage: (page: number) => void
}

function Users(props: UsersPropsType) {
  const pagesCount = Math.ceil(props.totalCount / props.countUsers)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={styles.users}>
      <ul className={styles.pages}>
        {pages.map(page => {
          return (
            <li onClick={() => {
              props.onClickPage(page)
            }}
                className={`${styles.page} ${page === props.currentPage && styles.activePage}`}>
              {page}
            </li>
          )
        })}
      </ul>
      <ul className={styles.usersList}>

        {
          props.users.map(user => {
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