import React from "react";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addUserProfile, getUserForProfile, userProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
  userId: string
}
type mapStateToPropsType = {
  userProfile: userProfileType
  isAuth: boolean
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
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {addUserProfile, getUserForProfile}),
  withRouter
)(ProfileContainer);

