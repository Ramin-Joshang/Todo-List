import React, { Component } from 'react'
import Tasks from './Tasks'

export default class TodoList extends Component {
    state = {
        tasks: [],
        taskTitle: '',
        checked: false
    }
    addTasksHandler = e => {
        e.preventDefault()
        if (this.state.taskTitle && this.state.taskTitle.length > 3) {
            const tasks = [...this.state.tasks]
            const newTask = {
                id: tasks.length + 1,
                title: this.state.taskTitle,
                edit: false,
                check: false
            }
            tasks.push(newTask);
            this.setState({ tasks: tasks, taskTitle: "" })
            console.log(this.state.tasks);
        }
    }
    deleteTasksHandler = id => {
        const tasks = [...this.state.tasks]
        const newTask = tasks.filter(task => task.id !== id)
        this.setState({ tasks: newTask })

    }
    editTaskHandler = (e, id) => {
        const tasks = [...this.state.tasks]
        const taskIndex = tasks.findIndex(task => task.id === id)
        tasks[taskIndex].title = e.target.value;
        this.setState({ tasks })
    }
    toggleEditTaskHandler = id => {
        const tasks = [...this.state.tasks]
        const taskIndex = tasks.findIndex(task => task.id === id)
        tasks[taskIndex].edit = !tasks[taskIndex].edit
        console.log(tasks[taskIndex].edit);
        this.setState({ tasks })
    }
    doTasksHandler = (id) => {
        const tasks = [...this.state.tasks]
        const taskIndex = tasks.findIndex(task => task.id === id)
        tasks[taskIndex].check = !tasks[taskIndex].check
        this.setState({ tasks })
    }
    render() {
        const { tasks, taskTitle, checked } = this.state;
        return (
            <section className='w-75 m-auto text-center'>
                <h2 className='mt-4'>TodoList</h2>
                <form className='p-4 border my-4'>
                    <div className="input-group mb-3">
                        <button onClick={this.addTasksHandler} className="input-group-text border-0 bg-info text-light"><i className='fa fa-book'></i></button>
                        <input type="text" maxLength={20} className="form-control" placeholder="New Todo" value={taskTitle} onChange={e => this.setState({ taskTitle: e.target.value })} />
                    </div>
                    <button onClick={this.addTasksHandler} type='button' className="form-control btn btn-info">Add new task</button>
                </form>
                <h2>Tasks</h2>
                <section className='d-flex justify-content-between mb-5 mt-2' >
                    <button type="button" className="btn btn-info col-3">All</button>
                    <button type="button" className="btn btn-info col-3">Done</button>
                    <button type="button" className="btn btn-info col-3">Todo</button>
                </section>

                <Tasks
                    tasks={tasks}
                    deleteTask={this.deleteTasksHandler}
                    doTasks={this.doTasksHandler}
                    checked={checked}
                    editTask={this.editTaskHandler}
                    toggleEdit={this.toggleEditTaskHandler}
                />
            </section>
        )
    }
}
