import React from 'react';
import './css/reset.css';
import './css/app.css'
import './css/Colors.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Aside from './components/Aside/Aside';
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
                profilePage = {props.state.profilePage}
                dispatch = {props.dispatch}
                background = {props.state.profilePage.background} /> } />
          <Route path = '/messages'
                render = { () => <Messages
                messagesPage = {props.state.messagesPage}
                dispatch = {props.dispatch} /> } />
          <Route path = '/friends'
                render = { () => <Friends
                friendsPage = {props.state.friendsPage} /> } />
          <Route path = '/news'
                render = { () => <News
                newsPage = {props.state.newsPage} /> } />
        </Switch>
      </div>
      <div className = 'aside'>
        <Aside news = 'Someday there will be fresh news' />
      </div>
      <div className = 'footer'>
        <Footer info = 'Someday there will be information about creator'/>
      </div>
    </div>
  );
}

export default withRouter(App);