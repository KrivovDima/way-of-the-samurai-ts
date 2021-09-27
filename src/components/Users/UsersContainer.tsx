import React from "react";
import {connect} from "react-redux";
import {
  changeFetchStatusAC,
  changeToFollowAC,
  changeToUnfollowAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  toggleSubscribeProgressAC,
  userType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/redux-store";
import Users from "./Users";
import {usersAPI} from "../../api/api";

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
  subscribeProgressUserId: Array<number>
  toggleSubscribeProgress: (isFetchSubscribe: boolean, userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.changeFetchStatus(true)

    usersAPI.getUsers(this.props.countUsers)
      .then(response => {
        this.props.setUsers(response.items)
        this.props.setTotalCount(response.totalCount)
        this.props.changeFetchStatus(false)
      })
  }

  onClickPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.changeFetchStatus(true)

    usersAPI.getUsers(this.props.countUsers, pageNumber)
      .then(response => {
        this.props.setUsers(response.items)
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
                  preloader={this.props.isFetch}
                  subscribeProgressUserId={this.props.subscribeProgressUserId}
                  toggleSubscribeProgress={this.props.toggleSubscribeProgress}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetch: state.usersPage.isFetch,
    subscribeProgressUserId: state.usersPage.subscribeProgressUserId,
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
  changeToFollow: changeToFollowAC,
  changeToUnfollow: changeToUnfollowAC,
  setUsers: setUsersAC,
  setTotalCount: setTotalCountAC,
  setCurrentPage: setCurrentPageAC,
  changeFetchStatus: changeFetchStatusAC,
  toggleSubscribeProgress: toggleSubscribeProgressAC,
})(UsersContainer);

