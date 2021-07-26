import ReactDOM from "react-dom";
import App from "./App";
import {addPost, stateType} from "./redux/state";

export function rerenderAllTree(state: stateType) {
  ReactDOM.render(<App state = {state} addPost = {addPost}/>,
  document.getElementById('root'));
}