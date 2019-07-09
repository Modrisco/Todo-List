import axios from 'axios'
// const API_URL = 'http://localhost:8000'

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

export default class TasksService {

    constructor() {}

    getTasks() {
        console.log("get tasks")
        const url = `/api/tasks/`
        console.log(url)
        return axios.get(url).then(response => response.data)
    }

    getTasksByURL(link) {
        const url = `${link}`
        return axios.get(url).then(response => response.data)
    }

    getTask(pk) {
        const url = `/api/tasks/${pk}`
        return axios.get(url).then(response => response.data)
    }

    deleteTask(task) {
        const url = `/api/tasks/${task.pk}`
        return axios.delete(url)
    }

    createTask(task) {
        const url = `/api/tasks/`
        return axios.post(url, task)
    }

    updateTask(task) {
        const url = `/api/tasks/${task.pk}`
        return axios.put(url, task)
    }
}