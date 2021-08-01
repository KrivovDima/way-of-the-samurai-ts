import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionType, addPostType, profilePageType} from '../../redux/state';

type ProfilePropsType = {
  data: profilePageType
  dispatch: (action: actionType) => void
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo/>
      <MyPosts postsData={props.data.postsData}
               newTextPost={props.data.newTextPost}
               dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;