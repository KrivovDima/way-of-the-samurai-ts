import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {stateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

function rerenderAllTree(state: stateType) {
  ReactDOM.render(<App state={store.getState()}
                       dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root'));
}

rerenderAllTree(store.getState());

store.subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
