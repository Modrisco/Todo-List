import React, { Component } from 'react';

import TasksService from './TasksService';

const tasksService = new TasksService();

class TaskCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
            tasksService.getTask(params.pk).then((t)=>{
                this.refs.task_title.value = t.task_title;
                // does not need to manipulate create date
                var temp = t.expire_date.slice(0, -1)
                this.refs.expire_date.value = temp;
                // change task state in 'set done' button
                this.refs.description.value = t.description;
                this.refs.task_priority.value = t.task_priority;
            })
        }
    }

    handleCreate() {
        // format the date for backend input
        var date = new Date(this.refs.expire_date.value);
        var formattedDate = date.toISOString();
        tasksService.createTask(
            {
                "task_title": this.refs.task_title.value,
                "expire_date": formattedDate,
                "description": this.refs.description.value,
                "task_priority": this.refs.task_priority.value
            }
        ).then((result)=>{
            alert("Task created!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk){
        // format the date for backend input
        // TODO: how to deal with the scenario that the expire date need to be changed?
        var expire_time = this.refs.expire_date.value + "Z"
        tasksService.updateTask(
            {
                "pk": pk,
                "task_title": this.refs.task_title.value,
                // "create_date": this.refs.create_date.value,
                "expire_date": expire_time,
                // "task_state": this.refs.task_state.value,
                "description": this.refs.description.value,
                "task_priority": this.refs.task_priority.value
            }
        ).then((result)=>{
            console.log(result);
            alert("Task updated!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }

    handleSubmit(event) {
        const { match: { params } } = this.props;
        if(params && params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Task Title:</label>
                    <input className="form-control" type="text" ref='task_title' />

                    <label>
                        Expire Time:</label>
                    <input className="form-control" type="datetime-local" ref='expire_date' />

                    <label>
                        Task Priority:</label>
                    <select className="form-control" ref='task_priority'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>

                    <label>
                        Description:</label>
                    <textarea className="form-control" ref="description"/>

                    <br/>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default TaskCreateUpdate;