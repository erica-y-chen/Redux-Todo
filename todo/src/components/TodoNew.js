import React from 'react';
import {addTodo} from '../actions';

class TodoNew extends React.Component{
    constructor() {
        super(); 
        this.state= {
            name: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return(
            <form onSubmit={() => this.props.addTodo()}>
            <input
                type="text"
                name="name"
                value = {this.state.name}
                onChange = {this.handleChanges}
                /> 
            </form>
        )
    }
}


export default TodoNew;