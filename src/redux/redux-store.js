import { combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';
import asideReducer from './AsideReducer';
import usersPageReducer from './UsersPageReducer';
import authReducer from './AuthReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    common: commonReducer,
    friendsPage: friendsPageReducer,
    navbar: navbarReducer,
    newsPage: newsPageReducer,
    aside: asideReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;