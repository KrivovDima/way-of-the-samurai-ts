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
}
export type DialogsActionsType = ReturnType<typeof sendNewMessageAC>

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
}

const dialogsReducer = (state: dialogsPageType = initialState, action: DialogsActionsType): dialogsPageType => {
  switch (action.type) {
    case SEND_NEW_MESSAGE: {
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 3, message: action.messageText}],
      }
    }
    default: {
      return state
    }
  }
}

export const sendNewMessageAC = (messageText: string) => {
  return {
    type: SEND_NEW_MESSAGE,
    messageText
  } as const
}

export default dialogsReducer;