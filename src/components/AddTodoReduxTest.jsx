import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
// Add todos -> will add dada to store for becoming available globally-> To do that, Dispatch the event to store -> Events like on Submit
// useSelector & useDispatch are React resolveComponentProps, whihc are used to communicate or select reducers and update to store
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch() // uses a reducer to add it in a store
    const addTodoHandler = (e) => {
        e.preventDefault();// Helps to prevent from from actually getting submitted or process with data inserted in Input box, before submitting to server or before updating state of react
        //Dispatch uses a reducer to make chnages in store with an input, and update the state globally in store. Here we call "addTodo" Reducer for adding.
        dispatch(addTodo(input))
    }
  return (
    <div>
        <h1>Todos</h1>
        <form onSubmit={addTodoHandler}>
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                // value={input}
                onChange={(e) => setInput(e.target.value)}j
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
      </form>
    </div>
  )
}

export default AddTodo