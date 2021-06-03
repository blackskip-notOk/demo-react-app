import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import appReducer from './App/AppReducer'
import profileReducer from './Profile/ProfileReducer'
import dialogsReducer from './Dialogs/DialogsReducer'
import commonReducer from './Common/CommonReducer'
import friendsReducer from './Friends/FriendsReducer'
import navbarReducer from './Navbar/NavbarReducer'
import additionsReducer from './Additions/AdditionsReducer'
import usersReducer from './Users/UsersReducer'
import findUserReducer from './FindUser/FindUserReducer'
import authReducer from './Auth/AuthReducer'
import headerReducer from './Header/HeaderReducer'

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    common: commonReducer,
    friends: friendsReducer,
    navbar: navbarReducer,
    additions: additionsReducer,
    users: usersReducer,
    findUser: findUserReducer,
    auth: authReducer,
    header: headerReducer,
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))
//@ts-ignore
window.store = store

export default store