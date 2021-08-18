import {actionsType, dialogsPageType} from "./state";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const dialogsReducer = (state: dialogsPageType, action: actionsType): dialogsPageType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      state.newMessageText = action.text;
      return state;
    }
    case SEND_NEW_MESSAGE: {
      const newMessage = {id: 3, message: state.newMessageText};
      state.newMessageText = '';
      state.messagesData.push(newMessage);
      return state
    }
    default: {
      return state
    }
  }
}

export default dialogsReducer;