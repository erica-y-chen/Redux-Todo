export const ADD = 'ADD';


export const addTodo = todo => {
    console.log(todo);
    return{
        type: ADD,
        payload: todo,
    }
}