import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {storeType} from "./redux/redux-store";

// type AppPropsType = {
//   store: storeType
// }

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.inner}>
        <Menu/>
        <div className={styles.mainContent}>
          <Route path='/profile' render={() => <Profile/>}
          />
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
