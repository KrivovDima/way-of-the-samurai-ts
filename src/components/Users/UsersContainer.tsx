import React from "react";
import {connect} from "react-redux";
import {
  changeFetchStatus,
  changeToFollow,
  changeToUnfollow, fetchFollow, fetchUnfollow, getUsers,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleSubscribeProgress,
  userType
} from "../../redux/usersReducer";
import {StateType} from "../../redux/redux-store";
import Users from "./Users";
import {usersAPI} from "../../api/api";
import {
  getCountUsers,
  getCurrentPage,
  getIsFetch,
  getSubscribeProgressUserId,
  gettingUsers,
  getTotalCountUsers
} from "../../redux/usersSelectors";

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
  getUsers: (countUsers: number, pageNumber: number) => void
  fetchFollow: (userId: number) => void
  fetchUnfollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.countUsers, this.props.currentPage);
  }

  onClickPage = (pageNumber: number) => {
    this.props.getUsers(this.props.countUsers, pageNumber);
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
                  toggleSubscribeProgress={this.props.toggleSubscribeProgress}
                  fetchFollow={this.props.fetchFollow}
                  fetchUnfollow={this.props.fetchUnfollow}/>
  }
}

// const mapStateToProps = (state: StateType) => {
//   return {
//     users: state.usersPage.users,
//     countUsers: state.usersPage.countUsers,
//     currentPage: state.usersPage.currentPage,
//     totalCount: state.usersPage.totalCount,
//     isFetch: state.usersPage.isFetch,
//     subscribeProgressUserId: state.usersPage.subscribeProgressUserId,
//   }
// }
const mapStateToProps = (state: StateType) => {
  return {
    users: gettingUsers(state),
    countUsers: getCountUsers(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCountUsers(state),
    isFetch: getIsFetch(state),
    subscribeProgressUserId: getSubscribeProgressUserId(state),
  }
}

export default connect(mapStateToProps, {
  changeToFollow,
  changeToUnfollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  changeFetchStatus,
  toggleSubscribeProgress,
  getUsers,
  fetchFollow,
  fetchUnfollow,
})(UsersContainer);

