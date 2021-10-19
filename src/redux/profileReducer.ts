import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ProfileActionsType = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof addUserProfile>
  | ReturnType<typeof setStatus>
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
  userProfile: userProfileType
  status: string
}

const ADD_POST = 'ADD-POST';
const ADD_USER_PROFILE = 'ADD-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState: profilePageType = {
  postsData: [
    {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
    {id: 2, message: 'Hello, how are you', likeCount: 20},
  ],
  userProfile: {} as userProfileType,
  status: ''
}

const profileReducer = (state: profilePageType = initialState, action: ProfileActionsType): profilePageType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [...state.postsData, {id: 5, message: action.text, likeCount: 0}],
      };
    }
    case ADD_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      }
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    default: {
      return state;
    }
  }
}

export const addPostActionCreator = (text: string) => {
  return {type: ADD_POST, text} as const
}
export const addUserProfile = (userProfile: userProfileType) => {
  return {
    type: ADD_USER_PROFILE,
    userProfile
  } as const
}
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserForProfile = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getUser(userId)
    .then(response => {
      dispatch(addUserProfile(response.data));
    })
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
  try {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
  } catch (e) {
  }
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  try {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (e) {
  }
}

export default profileReducer;