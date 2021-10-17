import React from "react";
import Dialogs from "./Dialogs";
import {dialogsPageType, sendNewMessageAC} from "../../redux/dialogsReducer";
import {StateType, storeType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
  data: dialogsPageType
}
type mapDispatchToPropsType = {
  sendNewMessage: (messageText: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    data: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    sendNewMessage: (messageText: string) => {
      dispatch(sendNewMessageAC(messageText))
    },
  }
}

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
