import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageAC, dialogsPageType, sendNewMessageAC} from "../../redux/dialogsReducer";
import {StateType, storeType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
  data: dialogsPageType
  isAuth: boolean
}
type mapDispatchToPropsType = {
  addNewMessage: (text: string) => void
  sendNewMessage: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    data: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addNewMessage: (text: string) => {
      dispatch(addNewMessageAC(text))
    },
    sendNewMessage: () => {
      dispatch(sendNewMessageAC())
    },
  }
}

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
