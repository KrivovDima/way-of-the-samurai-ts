import profileReducer, {actionsType, profilePageType} from "./profileReducer";
import dialogsReducer, {dialogsPageType} from "./dialogsReducer";


export type stateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
}
export type addPostType = () => void
type observerType = (state: stateType) => void


type storeType = {
  _state: stateType
  _callSubscriber: (state: stateType) => void
  getState: () => stateType
  subscribe: (observer: observerType) => void
  dispatch: (action: actionsType) => void
}


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
  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}


