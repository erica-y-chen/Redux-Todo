import React from 'react'
import TodoNew from './TodoNew'
import Todo from './Todo'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class TodoList extends React.Component{


    render(){
        console.log(this.props.todos)
        return(
            <div>
                <TodoNew />
                {this.props.todos.map(todo => {
                    return (
                        <Todo todo={todo}/>
                    )
                })}
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
