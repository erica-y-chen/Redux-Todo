import {ADD} from '../actions'


const initialState = {
    todos: ["take out the trash", "feed the cats", "buy onions", "buy milk"],
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
                completed: false, 
            };
            default: 
                return state;
    }
};

export default reducer; 