import React from 'react';
import './css/reset.css';
import './css/app.css';
import './css/Colors.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import MessagesContainer from './components/Content/Messages/MessagesContainer';
import FriendsContainer from './components/Content/Friends/FriendsContainer';
import NewsContainer from './components/Content/News/NewsContainer';
import AsideContainer from './components/Aside/AsideContainer';
import Footer from './components/Footer/Footer';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import UsersContainer from './components/Content/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/AppReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}
  render() {
    if (!this.props.initialized) {
        return <Preloader />
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
            <Route path = '/profile/:userId?'
                render = { () => <ProfileContainer /> } />
            <Route path = '/messages'
                render = { () => <MessagesContainer /> } />
            <Route path = '/friends'
                render = { () => <FriendsContainer /> } />
            <Route path = '/news'
                render = { () => <NewsContainer /> } />
            <Route path = '/users'
                render = { () => <UsersContainer /> } />
            <Route path = '/login'
                render = {() => <Login />} />
          </Switch>
        </div>
        <div className = 'aside'>
          <AsideContainer />
        </div>
        <div className = 'footer'>
          <Footer info = 'Someday there will be information about creator'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(withRouter,
  connect(mapStateToProps, {initializeApp}))(App);