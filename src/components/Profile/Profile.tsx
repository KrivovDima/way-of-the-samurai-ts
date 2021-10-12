import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
  userProfile: userProfileType
  status: string
  updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo userProfile={props.userProfile}
                   updateStatus={props.updateStatus}
                   status={props.status}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;