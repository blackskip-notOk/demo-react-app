import './css/reset.css';
import './css/app.css';
import './css/variables.css';
import React, { lazy } from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { initializeApp } from './redux/App/AppReducer';
import { getInitialized } from './redux/App/AppSelectors';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import { getIsAuth } from './redux/Auth/AuthSelectors';
import { QueryClient, QueryClientProvider } from 'react-query';

const FriendsContainer = lazy(() => import('./components/Content/Friends/FriendsContainer'));
const DialogsContainer = lazy(() => import('./components/Content/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Content/Users/UsersContainer'));

const queryClient = new QueryClient();
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
                <Route path = '/'
                  component = {Login} />
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
          <Route exact strict path = '/'
            render = { () => <ProfileContainer />} />
          <Route path = '/profile/:userId?'
            render = { () => <ProfileContainer /> } />
          <Route path = '/dialogs'
            render = {withSuspense(DialogsContainer)} />
          <Route path = '/friends'
            render = {withSuspense(FriendsContainer)} />
          <Route path = '/users'
            render = {withSuspense(UsersContainer)} />
          <Route path = '/login'
            render = { () => <Login /> } />
          <Route path = '*'
            render = {() => <div>404 PAGE NOT FOUND</div>} />
        </Switch>
        </div>
        <div className = 'footer'>
          <Footer />
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
    <HashRouter basename={process.env.PUBLIC_URL}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppCompose />
      </Provider>
      </QueryClientProvider>
    </HashRouter>
  )
}
export default AppContainer;