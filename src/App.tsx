import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import {addPostType, stateType} from "./redux/state";

type AppPropsType = {
  state: stateType
  addPost: addPostType
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header/>
        <div className={styles.inner}>
          <Menu/>
          <div className={styles.mainContent}>
            <Route path='/profile' render={() => <Profile data={props.state.profilePage}
                                                          addPost={props.addPost}/>}/>
            <Route path='/dialogs' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
