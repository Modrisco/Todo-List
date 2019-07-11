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
import TaskCreateUpdate from "./components/taskAPI/TaskCreateUpdate";


const Page404 = ({ location }) => (
    <div align="center">
        <img alt={"pic"}  src={require('./pubilc/images/404.png')}></img>
        <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img alt={"pic"} src="https://d3ptyyxy2at9ui.cloudfront.net/logo-todoist-b5b89f.svg" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="../">HOMEPAGE</a>
                            <a className="nav-item nav-link" href="/template">TEMPLATE</a>
                            <a className="nav-item nav-link" href="/premium">PREMIUM</a>
                            <a className="nav-item nav-link" href="/business">BUSINESS</a>
                            <a className="nav-item nav-link" href="/alltasks">ALL TASKS</a>
                        </div>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/alltasks' exact component={Task}/>
                <Route path='/tasks' exact component={TaskCreateUpdate}/>
                <Route path="/tasks/:pk"  component={TaskCreateUpdate} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    </Provider>
    // <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
