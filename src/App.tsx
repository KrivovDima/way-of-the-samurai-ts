import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className={styles.app}>
      <HeaderContainer/>
      <div className={styles.inner}>
        <Menu/>
        <div className={styles.mainContent}>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}
          />
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
