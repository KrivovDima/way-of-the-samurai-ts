import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, profilePageType} from '../../redux/state';

type ProfilePropsType = {
  data: profilePageType
  addPost: addPostType
  updateTextPost: (text: string) => void
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo/>
      <MyPosts postsData={props.data.postsData}
               addPost={props.addPost}
               newTextPost={props.data.newTextPost}
               updateTextPost={props.updateTextPost}/>
    </div>
  )
}

export default Profile;