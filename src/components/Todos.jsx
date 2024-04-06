import React from 'react'
//  It's a method, which selects and fetches the required state for us from Store. Here the state is "todos" present in todoSlice. Later we traverse and print it.
import { useSelector } from 'react-redux'
// Also here we need a dispatchEvent, because, the todo list will have some action items like remove or Update Event. So to send the action to reducer, we need to dispatch it.
import { useDispatch } from 'react-redux'
// Also as we are dispatching an Action item, here removeTodo, for that we need that reducer whihc will be dispatched, hence importing
import { removeTodo } from '../features/todo/todoSlice';
import DeleteIcon from "@mui/icons-material/Delete";
function Todos() {
    //  Now here we have to select that reducer, whihc is keeping the updated List of Todo, and fetch that reducer from store, traverse it -> And print them
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
    <div>
        <h1>AddTodo</h1>
        <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}
export default Todos