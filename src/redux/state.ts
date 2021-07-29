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
  addPost: () => void
  updateTextPost: (text: string) => void
  getState: () => stateType
  subscribe: (observer: observerType) => void
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
    }
  },
  getState() {
    return this._state;
  },
  _rerenderAllTree(state: stateType) {
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newTextPost,
      likeCount: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newTextPost = '';
    this._rerenderAllTree(this._state);
  },
  updateTextPost(text: string) {
    this._state.profilePage.newTextPost = text;
    this._rerenderAllTree(this._state);
  },
  subscribe(observer: observerType) {
    this._rerenderAllTree = observer;
  }
}

export default store;