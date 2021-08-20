import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionsType, addPostType, profilePageType} from '../../redux/store';

type ProfilePropsType = {
  data: profilePageType
  dispatch: (action: actionsType) => void
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