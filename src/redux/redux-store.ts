import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export type StateType = ReturnType<typeof reducers>
export type storeType = typeof store

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

const store = createStore(reducers);

export default store;