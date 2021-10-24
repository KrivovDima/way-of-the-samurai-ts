import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer, AppReducerActionsType} from "./appReducer";

export type StateType = ReturnType<typeof rootReducer>
export type storeType = typeof store

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppActionType =
  AuthActionsType
  | DialogsActionsType
  | ProfileActionsType
  | UsersActionsType
  | AppReducerActionsType

export type ThunkType = ThunkAction<void, StateType, unknown, AppActionType>

export default store;


//@ts-ignore
window.store = store.getState()