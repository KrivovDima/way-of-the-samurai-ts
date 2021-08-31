import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import defaultUserPhoto from "../../assets/default-user-photo.png";
import {userType} from "../../redux/usersReducer";

type UsersCCPropsType = {
  users: Array<userType>
  countUsers: number
  currentPage: number
  totalCount: number
  changeToFollow: (userID: number) => void
  changeToUnfollow: (userID: number) => void
  setUsers: (users: Array<userType>) => void
  setTotalCount: (totalCount: number) => void
  setCurrentPage: (currentPage: number) => void
}

class UsersCC extends React.Component<UsersCCPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  onClickPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}&page=${pageNumber}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.countUsers)
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
                this.onClickPage(page)
              }}
                  className={`${styles.page} ${page === this.props.currentPage && styles.activePage}`}>
                {page}
              </li>
            )
          })}
        </ul>
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