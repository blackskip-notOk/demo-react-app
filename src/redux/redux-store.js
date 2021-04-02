import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';
import asideReducer from './AsideReducer';
import usersPageReducer from './UsersPageReducer';
import authReducer from './AuthReducer';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './AppReducer';

let reducers = combineReducers({
    app: appReducer,
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    common: commonReducer,
    friendsPage: friendsPageReducer,
    navbar: navbarReducer,
    newsPage: newsPageReducer,
    aside: asideReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;