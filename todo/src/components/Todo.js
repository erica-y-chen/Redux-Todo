import React from 'react';
import './todo.css'
import {connect} from 'react-redux'
import {completedTask} from '../actions'
import incomplete from '../img/incomplete.png'
import complete from '../img/complete.png'

const Todo = props => {
    console.log(props.completed)
    return(
        <div className = "task">
            <img className="completed" src={!props.completed ? incomplete : complete} 
            onClick = {e => {props.completedTask(props.id)}}/>

            <div className ="border">hi</div>
            <p>{props.name}</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        // todos: state.todos
    };
};


export default connect(mapStateToProps, {completedTask})(Todo);
