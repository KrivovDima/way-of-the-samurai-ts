import React, {LegacyRef} from 'react';
import {actionType, addPostType, postDataType} from '../../../redux/state';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

type MyPostsPropsType = {
  postsData: Array<postDataType>
  newTextPost: string
  dispatch: (action: actionType) => void
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

  const textareaPostRef: LegacyRef<HTMLTextAreaElement> = React.createRef();

  const addPost = () => {
    if (textareaPostRef.current) {
      props.dispatch({type: "ADD-POST"});
      textareaPostRef.current.value = '';
    }
  };

  const onChangePost = () => {
    if (textareaPostRef.current) {
      props.dispatch({type: "UPDATE-TEXT-POST", text: textareaPostRef.current.value});
    }
  }

  return (
    <div>
      <textarea value={props.newTextPost}
                className={styles.postText}
                ref={textareaPostRef}
                onChange={onChangePost}/>
      <button onClick={addPost}>Add post</button>
      {postDataIteration}
    </div>
  )
}

export default MyPosts;