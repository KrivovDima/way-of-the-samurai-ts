import React from 'react';
import styles from './App.module.css';
import Menu from "./components/Menu/Menu";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {StateType} from "./redux/redux-store";
import {initialize} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";

type AppPropsType = {
  initialized: boolean
  initialize: () => void
}

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div className={styles.appWrapper}>
          <Preloader/>
        </div>
      )
    }

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
            <Route path='/login' render={() => <Login/>}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {initialize}),
)(App);
