import {actionsType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

const initialState = {
  postsData: [
    {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
    {id: 2, message: 'Hello, how are you', likeCount: 20},
  ],
  newTextPost: '',
}

const profileReducer = (state: profilePageType = initialState, action: actionsType): profilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newTextPost,
        likeCount: 0
      };
      state.postsData.push(newPost);
      state.newTextPost = '';
      return state;
    }
    case UPDATE_TEXT_POST: {
      state.newTextPost = action.text;
      return state;
    }
    default: {
      return state;
    }
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

export default profileReducer;