import React from "react";
import {connect} from "react-redux";
import {
  changeToFollowAC,
  changeToUnfollowAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  userType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";
import UsersCC from "./UsersCC";

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeToFollow: (userID: number) => {
      dispatch(changeToFollowAC(userID))
    },
    changeToUnfollow: (userID: number) => {
      dispatch(changeToUnfollowAC(userID))
    },
    setUsers: (users: Array<userType>) => {
      dispatch(setUsersAC(users))
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC)

export default UsersContainer;