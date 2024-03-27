// So here these are actions, which are sent by Action creators, and they are dispatched to reducers.
export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState();
    // A todo, that is received from our app already exists in our state or not
    const hasTodo = todos.find((i) => i.todo === todo);
     // If doesn't exit, then we dispatch our Todo, to the respective Reducer. There, it will filter out the reducer  
    if(!hasTodo && todo !== ""){
        dispatch({
            type: "ADD_TODO",
            payload: [{ id : todo, todo }, ...todos],
        });
    }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState();
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((t) => t.id !== todo.id),
    });
};