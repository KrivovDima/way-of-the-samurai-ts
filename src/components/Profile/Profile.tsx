import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {storeType} from "../../redux/redux-store";

// type ProfilePropsType = {
//   store: storeType
// }

function Profile() {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;