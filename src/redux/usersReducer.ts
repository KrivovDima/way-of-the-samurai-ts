import {actionsType} from "./profileReducer";

const CHANGE_TO_FOLLOW = 'CHANGE-TO-FOLLOW';
const CHANGE_TO_UNFOLLOW = 'CHANGE-TO-UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type userType = {
  id: number
  followed: boolean
  photos: { small: null | string, large: null | string }
  name: string
  status: string
  location: { city: string, country: string }
}

type initialStateType = []

const initialState: initialStateType = []

export const usersReducer = (state: Array<userType> | initialStateType = initialState, action: actionsType): Array<userType> => {
  switch (action.type) {
    case CHANGE_TO_FOLLOW: {
      return state.map(u => u.id === action.userID ? {...u, followed: true} : u)
    }
    case CHANGE_TO_UNFOLLOW: {
      return state.map(u => u.id === action.userID ? {...u, followed: false} : u)
    }
    case SET_USERS: {
      return [...state, ...action.users]
    }
    default: {
      return state
    }
  }
}

export const changeToFollowAC = (userID: number) => {
  return {
    type: CHANGE_TO_FOLLOW,
    userID
  } as const
}

export const changeToUnfollowAC = (userID: number) => {
  return {
    type: CHANGE_TO_UNFOLLOW,
    userID
  } as const
}

export const setUsersAC = (users: Array<userType>) => {
  return {
    type: SET_USERS,
    users,
  } as const
}