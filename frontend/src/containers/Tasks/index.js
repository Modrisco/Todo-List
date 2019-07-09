import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from  'react-router-dom'

import TasksList from '../../components/taskAPI/TasksList'

const BaseLayout = () => (
    <div className="container-fluid">​
        <div className="content">
        ​   <TasksList/>
        </div>
    </div>
)

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                    <BaseLayout/>
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
