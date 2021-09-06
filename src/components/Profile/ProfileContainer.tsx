import React from "react";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addUserProfile, userProfileType} from "../../redux/profileReducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
  userId: string
}
type mapStateToPropsType = {
  userProfile: userProfileType
}
type mapDispatchToPropsType = {
  addUserProfile: (userProfile: userProfileType) => void
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    console.log(this.props)
    console.log(userId)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.addUserProfile(response.data)
    })
  }

  render() {
    return <Profile userProfile={this.props.userProfile}/>
  }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    userProfile: state.profilePage.userProfile
  }
}

const ProfileContainerWithURLData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {addUserProfile})(ProfileContainerWithURLData);

