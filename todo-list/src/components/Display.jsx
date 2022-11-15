import React from 'react'

const Display = (props) => {
    return (
        <div>
            <legend>Display.jsx</legend>

            {props.lists.map((list, idx) => {
                return (
                    <li><div key={idx}
                        style={{
                            display: 'inline-block',
                            textDecoration: list.status ? "line-through" : "none"
                        }}>
                        {list.task}
                        <input type="checkbox" class="m-1" checked={list.status} onChange={(e) => props.updateTask(e, idx)} />
                        <button class="btn btn-primary m-2" onClick={(e) => {props.deleteList(e, idx)}}>Delete</button></div>
                    </li>

                )
            })}
        </div>
    )
}

export default Display