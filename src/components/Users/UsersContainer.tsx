import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeToFollowAC, changeToUnfollowAC, setUsersAC, userType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage,
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
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;