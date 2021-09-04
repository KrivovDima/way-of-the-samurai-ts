import React from "react";
import {connect} from "react-redux";
import {
  changeFetchStatus,
  changeToFollow,
  changeToUnfollow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  userType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";

type UsersContainerPropsType = {
  users: Array<userType>
  countUsers: number
  currentPage: number
  totalCount: number
  isFetch: boolean
  changeToFollow: (userID: number) => void
  changeToUnfollow: (userID: number) => void
  setUsers: (users: Array<userType>) => void
  setTotalCount: (totalCount: number) => void
  setCurrentPage: (currentPage: number) => void
  changeFetchStatus: (value: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.changeFetchStatus(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
      this.props.changeFetchStatus(false)
    })
  }

  onClickPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.changeFetchStatus(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}&page=${pageNumber}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.changeFetchStatus(false)
    })
  }

  render() {
    return <Users users={this.props.users}
                  countUsers={this.props.countUsers}
                  totalCount={this.props.totalCount}
                  changeToFollow={this.props.changeToFollow}
                  changeToUnfollow={this.props.changeToUnfollow}
                  currentPage={this.props.currentPage}
                  onClickPage={this.onClickPage}
                  preloader={this.props.isFetch}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetch: state.usersPage.isFetch,
  }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     changeToFollow: (userID: number) => {
//       dispatch(changeToFollowAC(userID))
//     },
//     changeToUnfollow: (userID: number) => {
//       dispatch(changeToUnfollowAC(userID))
//     },
//     setUsers: (users: Array<userType>) => {
//       dispatch(setUsersAC(users))
//     },
//     setTotalCount: (totalCount: number) => {
//       dispatch(setTotalCountAC(totalCount))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     changeFetchStatus: (value: boolean) => {
//       dispatch(changeFetchStatusAC(value))
//     }
//   }
// }


export default connect(mapStateToProps, {
  changeToFollow,
  changeToUnfollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  changeFetchStatus
})(UsersContainer);

