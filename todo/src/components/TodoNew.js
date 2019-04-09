import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import './todo.css'

class TodoNew extends React.Component{
    constructor(props) {
        super(props); 
        this.state= {
            name: props.input || ""
        };
    }

    handleChanges = e => {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                this.props.addTodo(this.state.name)
                
                this.setState({
                    name: '',
                })
            }}>
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        input: state.input,
    };
};

export default connect(mapStateToProps, {addTodo})(TodoNew);