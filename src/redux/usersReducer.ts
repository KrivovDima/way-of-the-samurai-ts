import {actionsType} from "./profileReducer";

const CHANGE_TO_FOLLOW = 'CHANGE-TO-FOLLOW';
const CHANGE_TO_UNFOLLOW = 'CHANGE-TO-UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type userType = {
  id: number
  followed: boolean
  photoUrl: string
  fullName: string
  status: string
  location: { city: string, country: string }
}


const initialState = [
  {
    id: 1,
    followed: true,
    photoUrl: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    fullName: 'Dima',
    status: 'learn React',
    location: {
      city: 'Astrakhan',
      country: 'Russia'
    },
  },
  {
    id: 2,
    followed: true,
    photoUrl: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    fullName: 'Aliya',
    status: 'Nail master',
    location: {
      city: 'Astrakhan',
      country: 'Russia'
    },
  },
  {
    id: 3,
    followed: false,
    photoUrl: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    fullName: 'Dasha',
    status: 'learn to school',
    location: {
      city: 'Astrakhan',
      country: 'Russia'
    },
  },
  {
    id: 4,
    followed: false,
    photoUrl: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    fullName: 'Masha',
    status: 'learn to school',
    location: {
      city: 'Astrakhan',
      country: 'Russia'
    },
  },
]

export const usersReducer = (state: Array<userType> = initialState, action: actionsType): Array<userType> => {
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