import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageAC, dialogsPageType, sendNewMessageAC} from "../../redux/dialogsReducer";
import {StateType, storeType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  data: dialogsPageType
}
type mapDispatchToPropsType = {
  addNewMessage: (text: string) => void
  sendNewMessage: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    data: state.dialogsPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;