import {ADD} from '../actions'
import {COMPLETED} from '../actions'



const initialState = {
    todos: [{
        name: "take out the trash",
        id: 0,
        completed: false}],
    input: "",
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
        console.log("Added")
        var newTask = {};
        newTask = {name: action.payload, id: state.todos.length+1, completed: false}
        var newArray = [];
        newArray = [...state.todos, newTask]
        console.log(newArray)
            return{
                input: action.payload, 
                todos: newArray,
            };
        
        case COMPLETED:
        console.log("Completed")
        console.log(state.id)
        var task = {};
        var newArray = state.todos.map(todo=> {
            if (todo.id == action.payload) {
                task = todo; 
                task.completed=!task.completed
                return task; 
            }
            return todo;
        })
            return{
                ...state,
                todos: newArray,
            };

            default:
                return state;
    }
};

export default reducer; 