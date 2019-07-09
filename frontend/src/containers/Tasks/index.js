import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from 'react-router-dom'

import TasksList from '../../components/taskAPI/TasksList'
import TaskCreateUpdate from '../../components/taskAPI/TaskCreateUpdate'

const BaseLayout = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-todoist-b5b89f.svg" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">HOW IT WORKS</a>
                    <a className="nav-item nav-link" href="/">TEMPLATE</a>
                    <a className="nav-item nav-link" href="/">PREMIUM</a>
                    <a className="nav-item nav-link" href="/">BUSINESS</a>
                    <a className="nav-item nav-link" href="/tasks">START TO USE</a>
                </div>
            </div>
        </nav>

        <section>
            <div align="center">
                <h2>Help me</h2>
            </div>
        </section>
        <hr className="td-m-v-0"></hr>
        <section>
            <div align="center">
                <h2>Help you</h2>
            </div>
        </section>
        ​
        <div className="content">
            <Route path="/tasks" exact component={TasksList} />
            <Route path="/tasks/:pk"  component={TaskCreateUpdate} />
            <Route path="/tasks/new" exact component={TaskCreateUpdate} />
        ​
        </div>
        ​
    </div>
)

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // _renderButtons() {
    //     return (
    //         <React.Fragment>
    //         </React.Fragment>
    //     )
    // }
    render() {
        return (
            <div>
                <BrowserRouter/>
                    <BaseLayout/>
                <BrowserRouter/>
                {/*{this._renderButtons()}*/}
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    user: state.user
})
const actionCreator = {}
export default connect(
    mapStateToProps
)(Task);