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
  BrowserRouter, Route
} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className = 'grid-wrapper'>
        <Header />
        <Nav />
          <div className = 'content'>
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/friends' component={Friends} />
            <Route path='/news' component={News} />
          </div>
        <Aside news = 'Someday there will be fresh news' />
        <Footer info = 'Someday there will be information about creator' />
      </div>
    </BrowserRouter>
  );
}

export default App;