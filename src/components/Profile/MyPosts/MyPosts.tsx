import React, {ChangeEvent, LegacyRef} from 'react';
import {
  actionsType,
  postDataType,
} from '../../../redux/store';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profileReducer";

type MyPostsPropsType = {
  postsData: Array<postDataType>
  newTextPost: string
  addPost: () => void
  updateText: (text: string) => void
}

function MyPosts(props: MyPostsPropsType) {

  const postDataIteration = props.postsData.map((post) => {
    return (
      <Post
        message={post.message}
        likeCount={post.likeCount}
      />
    )
  });

  const addPost = () => {
    props.addPost();
  };

  const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateText(event.currentTarget.value)
  }

  return (
    <div>
      <textarea value={props.newTextPost}
                className={styles.postText}
                onChange={onChangePost}/>
      <button onClick={addPost}>Add post</button>
      {postDataIteration}
    </div>
  )
}

export default MyPosts;