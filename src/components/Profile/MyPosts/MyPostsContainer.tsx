import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, postDataType, updateTextActionCreator} from "../../../redux/profileReducer";
import {StateType, storeType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  postsData: Array<postDataType>
  newTextPost: string
}
type mapDispatchToPropsType = {
  addPost: () => void
  updateText: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    newTextPost: state.profilePage.newTextPost,
    postsData: state.profilePage.postsData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateText: (text) => {
      dispatch(updateTextActionCreator(text))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;