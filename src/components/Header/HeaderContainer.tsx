import React from "react";
import Header from "./Header";
import axios from "axios";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = {
  auth: AuthStateType
  setAuthData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    authAPI.getAuthMe()
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, login, email} = response.data.data
          this.props.setAuthData(id, email, login)
        }
      })
  }

  render() {
    return <Header login={this.props.auth.login} isAuth={this.props.auth.isAuth}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);

