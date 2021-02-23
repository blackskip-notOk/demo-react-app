import React from 'react';
import ReactDOM from 'react-dom';
import "./css/reset.css";
import "./app.css";
import "./css/search.css";
import "./css/home.css";
import "./css/friends.css";
import "./css/video.css";
import "./css/lessons.css";
import "./css/colors.css";
import Header from './components/Header';
import Nav from './components/Navbar';
import Profile from './components/Profile';
import Aside from './components/Aside';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="grid-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Aside />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);