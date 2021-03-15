import { combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';
import asideReducer from './AsideReducer';
import findUsersPageReducer from './FindUsersPageReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    common: commonReducer,
    friendsPage: friendsPageReducer,
    navbar: navbarReducer,
    newsPage: newsPageReducer,
    aside: asideReducer,
    findUsersPage: findUsersPageReducer
});

let store = createStore(reducers);

export default store;