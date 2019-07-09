import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import Home from './containers/Home'
import Task from './containers/Tasks'
import CustomerCreateUpdate from "./CustomerCreateUpdate";
import TaskCreateUpdate from "./components/taskAPI/TaskCreateUpdate";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-todoist-b5b89f.svg" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="../">HOW IT WORKS</a>
                            <a className="nav-item nav-link" href="/">TEMPLATE</a>
                            <a className="nav-item nav-link" href="/">PREMIUM</a>
                            <a className="nav-item nav-link" href="/customers">BUSINESS</a>
                            <a className="nav-item nav-link" href="/tasks">START TO USE</a>
                        </div>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/tasks' exact component={Task}></Route>
                <Route path="/customers/:pk"  component={CustomerCreateUpdate} />
                <Route path="/customers/new" exact component={CustomerCreateUpdate} />
                <Route path="/tasks/:pk"  component={TaskCreateUpdate} />
            </Switch>
        </BrowserRouter>
    </Provider>
    // <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
