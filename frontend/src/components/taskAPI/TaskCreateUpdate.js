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
                this.refs.create_date.value = t.create_date;
                this.refs.expire_date.value = t.expire_date;
                this.refs.task_state.value = t.task_state;
                this.refs.description.value = t.description;
                this.refs.task_priority.value = t.task_priority;
            })
        }
    }

    handleCreate(){
        tasksService.createTask(
            {
                "task_title": this.refs.task_title.value,
                "create_date": this.refs.create_date.value,
                "expire_date": this.refs.expire_date.value,
                "task_state": this.refs.task_state.value,
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
        tasksService.updateTask(
            {
                "pk": pk,
                "task_title": this.refs.task_title.value,
                "create_date": this.refs.create_date.value,
                "expire_date": this.refs.expire_date.value,
                "task_state": this.refs.task_state.value,
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
                        First Name:</label>
                    <input className="form-control" type="text" ref='firstName' />

                    <label>
                        Last Name:</label>
                    <input className="form-control" type="text" ref='lastName'/>

                    <label>
                        Phone:</label>
                    <input className="form-control" type="text" ref='phone' />

                    <label>
                        Email:</label>
                    <input className="form-control" type="text" ref='email' />

                    <label>
                        Address:</label>
                    <input className="form-control" type="text" ref='address' />

                    <label>
                        Description:</label>
                    <textarea className="form-control" ref='description' ></textarea>


                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default TaskCreateUpdate;