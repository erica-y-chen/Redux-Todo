import React from 'react'
import TodoNew from './TodoNew'
import Todo from './Todo'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import './todo.css'

class TodoList extends React.Component{


    render(){
        console.log(this.props.todos)
        return(
            <div>
                <TodoNew />
                <div className="list">
                    {this.props.todos.map(todo => {
                        return (
                            <Todo todo={todo} name={todo.name} id={todo.id} completed={todo.completed}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}




// export default connect(mapStateToProps, {})

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};


export default connect(mapStateToProps, {addTodo})(TodoList);
