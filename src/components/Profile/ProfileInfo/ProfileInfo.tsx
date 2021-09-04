import React from "react";
import styles from "./ProfileInfo.module.css";
import {userProfileType} from "../../../redux/profileReducer";
import Preloader from "../../Preloader/Preloader";

type ProfileInfoPropsType = {
  userProfile: userProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
  if (Object.keys(props.userProfile).length === 0) {
    return <Preloader/>
  }
  return (
    <div>
      <img src={props.userProfile.photos.large} alt="avatar"/>
      Information
      <ul>
        <li>{props.userProfile.contacts.vk}</li>
        <li>{props.userProfile.contacts.github}</li>
        <li>{props.userProfile.contacts.facebook}</li>
        <li>{props.userProfile.contacts.twitter}</li>
        <li>{props.userProfile.contacts.instagram}</li>
        <li>{props.userProfile.lookingForAJob ? 'ищу работу' : 'не ищу работу'}</li>
        <li>{props.userProfile.lookingForAJobDescription}</li>
        <li>{props.userProfile.fullName}</li>
        <li>{props.userProfile.aboutMe}</li>
      </ul>
    </div>
  )
}

export default ProfileInfo;