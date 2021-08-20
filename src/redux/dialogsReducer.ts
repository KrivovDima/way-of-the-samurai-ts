import {actionsType, dialogsPageType} from "./store";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const initialState = {
  dialogsData: [
    {id: 1, name: 'Никита'},
    {id: 2, name: 'Стас'},
    {id: 3, name: 'Гена'},
    {id: 4, name: 'Турбо'},
    {id: 5, name: 'Дюша Метелкин'},
  ],
  messagesData: [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id: 2, message: 'Lorem ipsum dolor sit amet'},
    {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur'},
  ],
  newMessageText: '',
}

const dialogsReducer = (state: dialogsPageType = initialState, action: actionsType): dialogsPageType => {
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

export const addNewMessageAC = (text: string) => {
  return {
    type: ADD_NEW_MESSAGE,
    text
  } as const
}
export const sendNewMessageAC = () => {
  return {
    type: SEND_NEW_MESSAGE
  } as const
}

export default dialogsReducer;