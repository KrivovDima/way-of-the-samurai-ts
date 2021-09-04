export type dialogDataType = {
  id: number
  name: string
}
export type messageDataType = {
  id: number
  message: string
}
export type dialogsPageType = {
  dialogsData: Array<dialogDataType>
  messagesData: Array<messageDataType>
  newMessageText: string
}
type ActionsType = ReturnType<typeof addNewMessageAC>
  | ReturnType<typeof sendNewMessageAC>

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

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      return {
        ...state,
        newMessageText: action.text
      }
    }
    case SEND_NEW_MESSAGE: {
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 3, message: state.newMessageText}],
        newMessageText: '',
      }
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