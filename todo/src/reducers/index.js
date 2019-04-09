import {ADD} from '../actions'


const initialState = {
    todos: ["a", "b", "c", "d"],
    input: ""
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
        console.log("Added")
        var newArray = [];
        newArray = [...state.todos, action.payload]
        console.log(newArray)
            return{
                ...state,
                input: action.payload, 
                todos: newArray,
            };
            default: 
                return state;
    }
};

export default reducer; 