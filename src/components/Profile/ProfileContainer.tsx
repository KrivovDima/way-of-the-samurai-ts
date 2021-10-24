import React from "react";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addUserProfile, getStatus, getUserForProfile, updateStatus, userProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
  userId: string
}
type mapStateToPropsType = {
  userProfile: userProfileType
  isAuth: boolean
  status: string
  authUserId: number | null
}
type mapDispatchToPropsType = {
  addUserProfile: (userProfile: userProfileType) => void
  getUserForProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      this.props.authUserId
        ?
        userId = String(this.props.authUserId)
        :
        this.props.history.push('/login')
    }
    this.props.getUserForProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}/>
  }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authUserId: state.auth.userId
  }
}

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {addUserProfile, getUserForProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);

