import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import store from './redux/store';

let rerenderEntireTree = (state) => {
    ReactDOM.render((
        <BrowserRouter>
            <App state = {state}
                addPost = {store.addPost.bind(store)}
                updateNewPostText = {store.updateNewPostText.bind(store)}
                addMessage = {store.addMessage.bind(store)}
                updateNewMessageText = {store.updateNewMessageText.bind(store)} />
        </BrowserRouter>
    ),
    document.getElementById('app')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);