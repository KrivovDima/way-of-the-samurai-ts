import {rerenderAllTree} from "../render";

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
}

export type dialogsPageType = {
  dialogsData: Array<dialogDataType>
  messagesData: Array<messageDataType>
}

export type stateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
}

const state: stateType = {
  profilePage: {
    postsData: [
      {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
      {id: 2, message: 'Hello, how are you', likeCount: 20},
    ],
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
};

export type addPostType = (postText: string) => void

export const addPost = (postText: string) => {
  const newPost = {
    id: 5,
    message: postText,
    likeCount: 0
  };
  state.profilePage.postsData.push(newPost);
  rerenderAllTree(state);
}

export default state;