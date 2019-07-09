import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import App from './containers/Home'
import Login from './containers/Login'
import Task from './containers/Tasks'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/tasks' exact component={Task}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
    // <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
