import React from 'react';
import './css/reset.css';
import './css/app.css';
import './css/Colors.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import NewsContainer from './components/News/NewsContainer';
import AsideContainer from './components/Aside/AsideContainer';
import Footer from './components/Footer/Footer';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

const App =(props) => {
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
          <Route path = '/profile'
                render = { () => <ProfileContainer /> } />
          <Route path = '/messages'
                render = { () => <MessagesContainer /> } />
          <Route path = '/friends'
                render = { () => <FriendsContainer /> } />
          <Route path = '/news'
                render = { () => <NewsContainer /> } />
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

export default withRouter(App);