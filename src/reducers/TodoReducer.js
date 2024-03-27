export const TodoReducers=(
    state={todos:[]},
    action) => {
        // Here we check different actions, and on basis of actions, we divert the requests. Like if an UI wants to make an action of "playing cricket" or
        // "playing football", then the request will be send to given action
        switch(action.type){
            case "ADD_TODO":
                return {todos: action.payload};
            case "REMOVE_TODO":
                return {todos: action.payload};
            default:
                return state;
        }
}
export const LoginReducers=(
    state={login:[]},
    action) => {
        // Here we check different actions, and on basis of actions, we divert the requests. Like if an UI wants to make an action of "playing cricket" or
        // "playing football", then the request will be send to given action
        switch(action.type){
            case "LOGIN":
                return {todos: action.payload};
            case "SIGNUP":
                return {todos: action.payload};
            default:
                return state;
        }
}