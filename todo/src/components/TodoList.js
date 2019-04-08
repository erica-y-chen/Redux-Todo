import React from 'react'
import TodoNew from './TodoNew'
import Todo from './Todo'

class TodoList extends React.Component{


    render(){
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


export default TodoList;