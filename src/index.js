import React from 'react';
import {render} from 'react-dom';
import './index.css';
import './components/header/header.module.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose} from "redux";
import {Provider} from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.subscribe(() => {
    console.log('subscribe', store.getState())
})

// store.dispatch({type: 'ADD_TRACK', payload: 'Smell like spirit'})
// store.dispatch({type: 'ADD_TRACK', payload: 'Hello'})
// store.dispatch({type: 'AUTH', payload: [
//         '123123123123',
//         '123',
//         'pavlokolomoitsev',
//         'pavlo.kolomoitsev@nure.ua',
//         'male',
//         'login16',
//     ]})


render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
