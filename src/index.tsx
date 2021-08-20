import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {stateType} from "./redux/store";

function rerenderAllTree(state: stateType) {
  ReactDOM.render(<App state={state}
                       dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root'));
}

rerenderAllTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderAllTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
