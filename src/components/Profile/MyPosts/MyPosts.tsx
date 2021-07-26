import React, { LegacyRef } from 'react';
import {addPostType, postDataType} from '../../../redux/state';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

type MyPostsPropsType = {
  postsData: Array<postDataType>
  addPost: addPostType
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
      props.addPost(textareaPostRef.current.value);
    }
  };

  return (
    <div>
      <textarea className={styles.postText} ref={textareaPostRef}>

      </textarea>
      <button onClick={addPost}>Add post</button>
      {postDataIteration}
    </div>
  )
}

export default MyPosts;