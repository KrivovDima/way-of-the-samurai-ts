import React, {LegacyRef} from 'react';
import {addPostType, postDataType} from '../../../redux/state';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

type MyPostsPropsType = {
  postsData: Array<postDataType>
  addPost: addPostType
  newTextPost: string
  updateTextPost: (text: string) => void
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
      props.addPost();
      textareaPostRef.current.value = '';
    }
  };

  const onChangePost = () => {
    if (textareaPostRef.current) {
      props.updateTextPost(textareaPostRef.current.value);
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