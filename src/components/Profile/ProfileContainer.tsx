import React from "react";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addUserProfile, userProfileType} from "../../redux/profileReducer";
import axios from "axios";

type ProfileContainerPropsType = {
  userProfile: userProfileType
  addUserProfile: (userProfile: userProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.addUserProfile(response.data)
    })
  }

  render() {
    return <Profile userProfile={this.props.userProfile}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    userProfile: state.profilePage.userProfile
  }
}

export default connect(mapStateToProps, {addUserProfile})(ProfileContainer);

