import {React, useState} from 'react'
import { AddTodoAction } from './actions/TodoAction';
import { useDispatch, useSelector } from 'react-redux';
const Todo = () => {
  const[todo, setTodo] = useState([]);
  const dispatch = useDispatch();

  // This Selector basically selects the state that we want for this component, out of many states
  // Then After selection is done, we create our Action, here "AddTodoAction".
  // Then we have to check if the state is already present or not, if not,
  // Then we dispatch that Action to the reducer
  const Todo = useSelector((state) => state.Todo);
  const Login = useSelector((state) => state.Login);
  const {todos} = Todo;
  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo('');
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={todo}  
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
      {/* "key={t.id}" -> Here key is an object, that contains 2 properties, id, value */}
      {
        todos && todos.map((t) => (
            <li key={t.id}>{t.todo}</li>
        ))
      }
      </ul>
    </div> 
  );
}

export default Todo;