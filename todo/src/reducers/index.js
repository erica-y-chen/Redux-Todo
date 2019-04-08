import {ADD} from '../actions'


const initialState = {
    todos: ["a", "b", "c", "d"]
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
        console.log("Added")
            return{
                ...state,
            };
            default: 
                return state;
    }
};

export default reducer; 