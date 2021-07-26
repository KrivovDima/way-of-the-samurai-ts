import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, profilePageType} from '../../redux/state';

type ProfilePropsType = {
  data: profilePageType
  addPost: addPostType
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo/>
      <MyPosts postsData={props.data.postsData}
               addPost={props.addPost}/>
    </div>
  )
}

export default Profile;