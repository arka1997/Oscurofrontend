import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> It will basically generate unique Ids for each Todo, so that you can delete, update with those specific ids

const initialState = {
    todos: [{id: 1, text: "Hello World"}]///This is the initial or default state of Todos, and it will also hold the previous other states like previous Todo Lists
}

//Now here we can have multiple slices likes TodoSlice, LoginSlice, SignupSlice. Now suppose store1.js needs only todoSlice. So we export it from here. And import it in store 1. So that store1 gets to know the reducers it has to manage. Store2 can have LoginSlice only.
export const todoSlice = createSlice({
    name: 'todos', // this is the name, which will be shown in Redux
    initialState, //This is the initial values, that will be shown in Redux
    reducers: {
        //Contains Properties followed by Arrow functions and defining actions
        addTodo: (state, action) => {
            // This "state" returns all the previous initial states that were avalable so far and you can manipulate them
            // This "actions": contains values, like action can store id, that you will use to send data to removeTodo, so that it can delete that staet with the id
            // Then we simple set the values, that was fetched from a FORM, or backend, and Dispatched to this Reducer. This reducer, will update the state with the new values brought from UI.
            const todo = {
                id: nanoid(),// When we try to add a todo, then we store unique ids for each Todo
                text: action.payload // When we send a text from inside text box, that is present in action, and we pull it from their
            }
                // Then we have to get the new value from "todo", and update/push it inside "state" of "todos".
                state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            //  "state" is current State
            state.todos = state.todos.filter((todo) => 
                // Filtering will allow only those values that are true. Here its the ids that are not matching with value sent to action.payload
                //Now only the new set created by "filter()" containing non-matching values, will be updated insite the state variable "todos". Rest of the matching values will not be picked by filter, and hence will not be preset in the new todo list. 
                todo.id !== action.payload // Comparing Ids and Checking if the id I am sending thorugh "action" is not matching with the List of Todo Ids. 
            )
        },
        updateTodo: (state, action) => {
            // First match the id returned by action with all the Todo List iDs.
        },
    }
})

// I am exporting individual functionalities for Todo like addTodo, removeTodo, so that each can be used independently. Like if I use addTodo, export that only. I dont need to use removeTodo
export const {addTodo, removeTodo} = todoSlice.actions

// Also exporting the sliderClasses, here todoSlice that is needed by store1
export default todoSlice.reducer