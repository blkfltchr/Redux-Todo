import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer';
 
import App from './App';

ReactDOM.render(
    <Provider store={createStore(todoReducer)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
