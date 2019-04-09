import React from 'react';
import './todo.css'

const Todo = props => {
    return(
        <div className = "task">
            <div className ="completed">x</div>
            <div className ="border">hi</div>
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo;