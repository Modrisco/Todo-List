import React, { Component } from 'react'
import TasksService from './TasksService'

const taskService = new TasksService()

class TasksList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            nextPageURL: ''
        }
        this.nextPage = this.nextPage.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        var self = this
        taskService.getTasks().then(function (result) {
            console.log(result)
            console.log(result.data)
            self.setState({ tasks: result.data, nextPageURL: result.nextlink })
        })
    }

    handleDelete(e, pk) {
        var self = this
        taskService.deleteTask({pk: pk}).then(()=>{
            var newArr = self.state.tasks.filter(function (obj) {
                return obj.pk !== pk
            })
            self.setState({ tasks: newArr })
            alert("Delete Successfully")
        })
    }

    handleTaskDone(e, t) {
        var self = this
        taskService.doneTask({pk: t.pk, t: t}).then(()=> {
            var newArr = self.state.tasks.filter(function (obj) {
                return obj.pk !== t.pk
            })
            self.setState({ tasks: newArr})
            alert("Task finished")
        })
    }

    nextPage() {
        var self = this
        console.log(this.state.nextPageURL)
        taskService.getTasksByURL(this.state.nextPageURL).then((result) => {
            self.setState({ tasks: result.data, nextPageURL: result.nextlink })
        })
    }

    render() {
        return (
            <div className="tasks--list">
                <table className="table">
                    <thead key="thead">
                        <tr>
                            {/*<th>#</th>*/}
                            <th>Task Title</th>
                            <th>Create Date</th>
                            <th>Expire Date</th>
                            <th>Task State</th>
                            <th>Description</th>
                            <th>Task Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.tasks.map ( t =>
                        <tr key={t.pk}>
                            {/*<td>{t.pk}</td>*/}
                            <td><a href={"/tasks/" + t.pk}>{t.task_title}</a></td>
                            <td>{t.create_date.slice(0, 10)}</td>
                            <td>{t.expire_date.slice(0, 10)}</td>
                            {/*true: done; false: todo*/}
                            <td>{t.task_state?"done":"todo"}</td>
                            <td>{t.description}</td>
                            <td>{t.task_priority}</td>
                            <td>
                                <button onClick={(e) => this.handleDelete(e, t.pk)}>DELETE</button>
                                <button onClick={(e) => this.handleTaskDone(e, t)}>FINISH</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={ this.nextPage }>NEXT</button>
                <button className="btn">
                    <a href="/tasks/">New</a>
                </button>
            </div>
        )
    }
}

export default TasksList