import React from 'react';
import './css/reset.css';
import './css/app.css'
import './css/Colors.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
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
        <Header common = {props.state.common} />
      </div>
      <div className = 'nav'>
        <Nav navbar = {props.state.navbar} />
      </div>
      <div className = 'content'>
        <Switch>
          <Route path = '/profile'
                render = { () => <Profile
                profilePage = {props.state.profilePage} /> } />
          <Route path = '/messages'
                render = { () => <MessagesContainer /> } />
          <Route path = '/friends'
                render = { () => <Friends
                friendsPage = {props.state.friendsPage} /> } />
          <Route path = '/news'
                render = { () => <News
                newsPage = {props.state.newsPage} /> } />
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