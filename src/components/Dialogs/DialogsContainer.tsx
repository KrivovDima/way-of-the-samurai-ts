import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageAC, sendNewMessageAC} from "../../redux/dialogsReducer";
import {storeType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";

// type DialogsContainerPropsType = {
//   store: storeType
// }

function DialogsContainer() {

  return (
    <StoreContext.Consumer>
      {
        (store: storeType) => {
          const state = store.getState()

          const addNewMessage = (text: string) => {
            store.dispatch(addNewMessageAC(text))
          }

          const sendNewMessage = () => {
            store.dispatch(sendNewMessageAC())
          }
          return (
            <Dialogs data={state.dialogsPage}
                     addNewMessage={addNewMessage}
                     sendNewMessage={sendNewMessage}/>
          )
        }
      }

    </StoreContext.Consumer>
  )
}

export default DialogsContainer;