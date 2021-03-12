import { combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';
import asideReducer from './AsideReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    common: commonReducer,
    friendsPage: friendsPageReducer,
    navbar: navbarReducer,
    newsPage: newsPageReducer,
    aside: asideReducer,
});

let store = createStore(reducers);

export default store;