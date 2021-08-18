import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export type postDataType = {
  id: number
  message: string
  likeCount: number
}
export type dialogDataType = {
  id: number
  name: string
}
export type messageDataType = {
  id: number
  message: string
}
export type profilePageType = {
  postsData: Array<postDataType>
  newTextPost: string
}
export type dialogsPageType = {
  dialogsData: Array<dialogDataType>
  messagesData: Array<messageDataType>
  newMessageText: string
}
export type stateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
}
export type addPostType = () => void
type observerType = (state: stateType) => void
export type storeType = {
  _state: stateType
  _rerenderAllTree: (state: stateType) => void
  getState: () => stateType
  subscribe: (observer: observerType) => void
  dispatch: (action: actionsType) => void
}
export type actionsType =
  ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateTextActionCreator>
  | ReturnType<typeof addNewMessageAC>
  | ReturnType<typeof sendNewMessageAC>

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const store: storeType = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
        {id: 2, message: 'Hello, how are you', likeCount: 20},
      ],
      newTextPost: '',
    },
    dialogsPage: {
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
  },
  _rerenderAllTree(state: stateType) {
  },
  getState() {
    return this._state;
  },
  subscribe(observer: observerType) {
    this._rerenderAllTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderAllTree(this._state);
  }
}

export const addPostActionCreator = () => {
  return {type: ADD_POST} as const
}
export const updateTextActionCreator = (text: string) => {
  return {
    type: UPDATE_TEXT_POST,
    text: text
  } as const
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


export default store;