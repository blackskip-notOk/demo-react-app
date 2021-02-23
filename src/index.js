import React from 'react';
import ReactDOM from 'react-dom';
import "./css/reset.css";
import "./app.css";
import "./css/Colors.module.css";
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