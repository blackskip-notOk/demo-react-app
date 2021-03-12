import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import store from './redux/redux-store';
import { Provider } from './StoreContext';

let rerenderEntireTree = (state) => {
    ReactDOM.render((
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} />
            </Provider>
        </BrowserRouter>
    ),
    document.getElementById('app')
    );
}


rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});