import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, stateType, updateTextPost} from "./redux/state";

function rerenderAllTree(state: stateType) {
  ReactDOM.render(<App state = {state} addPost = {addPost} updateTextPost={updateTextPost}/>,
    document.getElementById('root'));
}

rerenderAllTree(state);

subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
