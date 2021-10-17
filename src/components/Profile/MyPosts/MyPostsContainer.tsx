import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, postDataType} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  postsData: Array<postDataType>
}
type mapDispatchToPropsType = {
  addPost: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    postsData: state.profilePage.postsData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: (text: string) => {
      dispatch(addPostActionCreator(text))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;