type ActionsType = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateTextActionCreator>
  | ReturnType<typeof addUserProfile>
export type userProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    vk: string
    twitter: string
    instagram: string
    github: string
  }
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}
export type postDataType = {
  id: number
  message: string
  likeCount: number
}
export type profilePageType = {
  postsData: Array<postDataType>
  newTextPost: string
  userProfile: userProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_USER_PROFILE = 'ADD-USER-PROFILE';

const initialState: profilePageType = {
  postsData: [
    {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
    {id: 2, message: 'Hello, how are you', likeCount: 20},
  ],
  newTextPost: '',
  userProfile: {} as userProfileType,
}

const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [...state.postsData, {id: 5, message: state.newTextPost, likeCount: 0}],
        newTextPost: '',
      };
    }
    case UPDATE_TEXT_POST: {
      return {
        ...state,
        newTextPost: action.text
      }
    }
    case ADD_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      }
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

export const addUserProfile = (userProfile: userProfileType) => {
  return {
    type: ADD_USER_PROFILE,
    userProfile
  } as const
}

export default profileReducer;