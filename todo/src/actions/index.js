export const ADD = 'ADD';
export const COMPLETED = 'COMPLETED';


export const addTodo = todo => {
    // console.log(todo);
    return{
        type: ADD,
        payload: todo,
    }
}

export const completedTask = id => {
    console.log(id)
    return{
        type: COMPLETED,
        payload: id,
    }
}