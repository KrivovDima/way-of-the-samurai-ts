import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profileReducer";
import {storeType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

// type MyPostsContainerPropsType = {
//   store: storeType
// }

function MyPostsContainer() {

  return <StoreContext.Consumer>
    {
      (store: storeType) => {
        const state = store.getState()

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        const updateText = (text: string) => {
          store.dispatch(updateTextActionCreator(text));
        }
        return (
          <MyPosts postsData={state.profilePage.postsData}
                   newTextPost={state.profilePage.newTextPost}
                   addPost={addPost}
                   updateText={updateText}/>
        )
      }
    }
  </StoreContext.Consumer>


}

export default MyPostsContainer;