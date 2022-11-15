import React, { useState } from 'react'

const TodoForm = (props) => {

    const [listTask, setListTask] = useState("")

    const submitTask = (e) => {
        e.preventDefault();
        const taskToCreate = {
            task: listTask,
            status: false
        }
        props.addTask(taskToCreate)


    }

    return (
        <div>
            <legend>TodoForm.jsx</legend>
            {/* listTask: {JSON.stringify(listTask)} */}
            <form onSubmit={submitTask}>
                {/* // to catch input on event and get the value */}
                <input onChange={(e) => setListTask(e.target.value)} value={listTask} /> <button>Add</button>
            </form>
        </div>

    )
}

export default TodoForm