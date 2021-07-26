import React from 'react';
import styles from './Post.module.css';
import avatarImg from './avatar.png';

type PostPropsType = {
  message: string
  likeCount: number
}

function Post(props: PostPropsType) {
  return (
    <div className={styles.post}>
      <div className={styles.avatar}>
        <img src={avatarImg} alt="avatar"/>
      </div>
      <div className={styles.box}>
        <div className={styles.text}>
          {props.message}
        </div>
        <div className={styles.like}>
          like {props.likeCount}
        </div>
      </div>
    </div>
  )
}

export default Post;