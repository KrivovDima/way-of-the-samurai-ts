import React from "react";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addUserProfile, getUserForProfile, userProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {lookupService} from "dns";

type PathParamsType = {
  userId: string
}
type mapStateToPropsType = {
  userProfile: userProfileType
}
type mapDispatchToPropsType = {
  addUserProfile: (userProfile: userProfileType) => void
  getUserForProfile: (userId: string) => void
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.getUserForProfile(userId);
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

export default connect(mapStateToProps, {addUserProfile, getUserForProfile})(ProfileContainerWithURLData);

