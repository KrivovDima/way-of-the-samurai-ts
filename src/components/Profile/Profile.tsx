import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
  userProfile: userProfileType
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;