import {ADD} from '../actions'
import {COMPLETED} from '../actions'


const initialState = {
    todos: ["take out the trash", "feed the cats", "buy onions", "buy milk"],
    input: "",
    completed: false,
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
        console.log("Added")
        var newArray = [];
        newArray = [...state.todos, action.payload]
        console.log(newArray)
            return{
                
                input: action.payload, 
                todos: newArray,
                completed: false, 
            };
        
        case COMPLETED:
        console.log("Completed")
            return{
                ...state,
                completed: true,
            };
            default:
                return state;
    }
};

export default reducer; 