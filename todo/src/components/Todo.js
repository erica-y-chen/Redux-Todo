import React from 'react';
import './todo.css'
import {connect} from 'react-redux'
import {completedTask} from '../actions'


const Todo = props => {
    return(
        <div className = "task">
            <div className ="completed" onClick={props.completedTask}>x</div>
            <div className ="border">hi</div>
            <p>{props.todo}</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        completed: state.completed,
    };
};


export default connect(mapStateToProps, {completedTask})(Todo);
