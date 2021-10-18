import React from "react";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, fetchAuthMe, postLogout, setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";

type HeaderContainerPropsType = {
  auth: AuthStateType
  setAuthData: (userId: number, email: string, login: string) => void
  fetchAuthMe: () => void
  postLogout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.fetchAuthMe();
  }

  render() {
    return <Header login={this.props.auth.login} isAuth={this.props.auth.isAuth} postLogout={this.props.postLogout}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {setAuthData, fetchAuthMe, postLogout})(HeaderContainer);

