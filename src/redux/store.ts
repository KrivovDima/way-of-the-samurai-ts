import profileReducer, {addPostActionCreator, updateTextActionCreator} from "./profileReducer";
import dialogsReducer, {addNewMessageAC, sendNewMessageAC} from "./dialogsReducer";

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
  _callSubscriber: (state: stateType) => void
  getState: () => stateType
  subscribe: (observer: observerType) => void
  dispatch: (action: actionsType) => void
}
export type actionsType =
  ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateTextActionCreator>
  | ReturnType<typeof addNewMessageAC>
  | ReturnType<typeof sendNewMessageAC>

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
  _callSubscriber(state: stateType) {
  },
  getState() {
    return this._state;
  },
  subscribe(observer: observerType) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}


export default store;