import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './AppReducer';
import asideReducer from './AsideReducer';
import authReducer from './AuthReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import messagesPageReducer from './MessagesPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';
import profilePageReducer from './ProfilePageReducer';
import usersPageReducer from './UsersPageReducer';

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