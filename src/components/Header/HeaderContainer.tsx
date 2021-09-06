import React from "react";
import Header from "./Header";
import axios from "axios";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";

type HeaderContainerPropsType = {
  auth: AuthStateType
  setAuthData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    }).then(response => {
      debugger
      if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        this.props.setAuthData(id, email, login)
      }
    })
  }

  render() {
    return <Header login={this.props.auth.login}/>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);

