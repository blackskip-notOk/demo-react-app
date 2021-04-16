import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './App/AppReducer';
import profileReducer from './Profile/ProfileReducer';
import messagesReducer from './Messages/MessagesReducer';
import commonReducer from './Common/CommonReducer';
import friendsReducer from './Friends/FriendsReducer';
import navbarReducer from './Navbar/NavbarReducer';
import newsReducer from './News/NewsReducer';
import asideReducer from './Aside/AsideReducer';
import usersReducer from './Users/UsersReducer';
import findUserReducer from './FindUser/FindUserReducer';
import authReducer from './Auth/AuthReducer';

let reducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    messages: messagesReducer,
    common: commonReducer,
    friends: friendsReducer,
    navbar: navbarReducer,
    news: newsReducer,
    aside: asideReducer,
    users: usersReducer,
    findUser: findUserReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store;