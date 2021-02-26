import React, {
  Component
} from 'react';
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
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';


class App extends Component {
  render() {
    const {history} = this.props;

  return (
    <BrowserRouter>
      <div className = 'grid-wrapper'>
        {/* <Switch> */}
        <div className = 'header'>
          <Header />
        </div>
        <div className = 'nav'>
          <Nav />
        </div>
        <div className = 'content'>
          <Route
            history = {history}
            path = '/profile'
            component = {Profile} />
          <Route
            history = {history}
            path = '/messages'
            component = {Messages}
          />
          <Route
            history = {history}
            path = '/friends'
            component = {Friends}
          />
          <Route
            history={history}
            path = '/news'
            component = {News}
          />
          {/* <Redirect
            from = '/'
            to = '/home'
          / > */}
        </div>
        <div className = 'aside'>
          <Aside
            news = 'Someday there will be fresh news'/ >
        </div>
        <div className = 'footer'>
          <Footer
            info = 'Someday there will be information about creator'/ >
        </div>
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
  }
}

export default withRouter(App);