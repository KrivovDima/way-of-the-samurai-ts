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
  dispatch: (action: actionType) => void
}
type addPostActionType = {
  type: 'ADD-POST'
}
type updateTextPost = {
  type: 'UPDATE-TEXT-POST'
  text: string
}
export type actionType = addPostActionType | updateTextPost

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
    switch (action.type) {
      case "ADD-POST":
        const newPost = {
          id: 5,
          message: this._state.profilePage.newTextPost,
          likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newTextPost = '';
        this._rerenderAllTree(this._state);
        break;
      case "UPDATE-TEXT-POST":
        this._state.profilePage.newTextPost = action.text;
        this._rerenderAllTree(this._state);
    }
  }
}

export default store;