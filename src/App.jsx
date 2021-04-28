import './css/reset.css';
import './css/app.css';
import './css/Colors.css';
import React, { lazy, useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AsideContainer from './components/Aside/AsideContainer';
import Preloader from './components/Common/Preloader/Preloader';
import UsersContainer from './components/Content/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { initializeApp } from './redux/App/AppReducer';
import { getInitialized } from './redux/App/AppSelectors';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import ToolbarFlow from './components/Common/ToolBar/Toolbar';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import { getIsAuth } from './redux/Auth/AuthSelectors';

const FriendsContainer = lazy(() => import('./components/Content/Friends/FriendsContainer'));
const AdditionsContainer = lazy(() => import('./components/Content/Additions/AdditionsContainer'));
const DialogsContainer = lazy(() => import('./components/Content/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader type='app'/>
    }

    if (!this.props.isAuth) {
      return <div className = 'login'>
          <Route path = '/:login?'
           render = {() => <Login />} />
      </div>
    }
    return (
      <div className = 'grid-wrapper'>
        <div className = 'header'>
          <HeaderContainer />
        </div>
        <div className = 'nav'>
          <NavbarContainer />
        </div>
        <div className = 'content'>
        <Switch>
          <Route path = '/profile/:userId'
            render = { () => <ProfileContainer />
            } />
          <Route path = '/dialogs'
            render = {withSuspense(DialogsContainer)} />
          <Route path = '/friends'
            render = {withSuspense(FriendsContainer)} />
          {/* <Route path = '/additions'
            render = {withSuspense(AdditionsContainer)} /> */}
          <Route path = '/users'
            render = { () => <UsersContainer /> } />
          <Route path = '/login'
            render = { () => <><div className = 'login'><Login /></div></> } />
          <Route path = '/'
            render = { () => <Redirect to = '/profile/:authUserId?' /> } />
          <Route path = '*'
            render = {() => <div>404 PAGE NOT FOUND</div>} />
        </Switch>
        </div>
        <div className = 'aside'>
          <AsideContainer>
            <ToolbarFlow />
          </AsideContainer>
        </div>
        <div className = 'footer'>
          <Footer info = 'Someday there will be information about creator' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: getInitialized(state),
    isAuth: getIsAuth(state)
  }
}

const AppCompose = compose(withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
const AppContainer = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppCompose />
      </Provider>
    </BrowserRouter>
  )
}
export default AppContainer;