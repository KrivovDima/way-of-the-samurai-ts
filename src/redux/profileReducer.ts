import {actionsType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

const profileReducer = (state: profilePageType, action: actionsType): profilePageType => {
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

export default profileReducer;